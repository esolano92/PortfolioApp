from flask import Flask, request, jsonify
from models import Project, db
from flask_cors import CORS
import os
from dotenv import load_dotenv
import logging

load_dotenv()

if os.environ.get("FLASK_ENV") == 'production':
    load_dotenv(dotenv_path=".env.production")

app = Flask(__name__, template_folder='templates')
CORS(app, origins=['https://esolano92.github.io'])

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

logging.basicConfig(level=logging.INFO)

# Creates table based off model if it doesnt exist yet.
with app.app_context():
    db.create_all()

# Check if Flask backend is working
# Trigger redeploy!
@app.route('/')
def home():
    return jsonify(message="Flask is working!")

# Create a route that only accepts POST methods
@app.route('/add-project', methods=['POST'])
def add_project():
    try:
        # Grab the JSON data from the request
        data = request.get_json()
        # Log the data that comes in from the form
        logging.info(f'Received data: {data}')


        # Create a new Project object 
        new_project = Project(
            title=data['title'],
            description=data['description'],
            github_url=data['github_url'],
            tech_stack=data['tech_stack'],
            image_url = data['image_url']
        )

        # Stage the Project data into the database
        db.session.add(new_project)
        # Write to the database with the new Project data
        db.session.commit() 

        # Log the project was successfully added
        logging.info(f"Project: {new_project.title} added successfully.") 

        # Return a Successful message
        return jsonify({'message': "Project added successfully"}), 201

    except Exception as error:
        logging.info(f'Error adding project {error}', exc_info=True)
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/get_projects', methods=['GET'])
def get_projects():
   projects = Project.get_projects()
   print(projects)
   return jsonify([proj.to_dict() for proj in projects])
if __name__ =='__main__':
    app.run()
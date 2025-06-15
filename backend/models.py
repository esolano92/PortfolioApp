from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    github_url = db.Column(db.Text, nullable=False)
    tech_stack = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.Text, nullable=False)

    # Class method that queries and retrieves all projects
    @classmethod
    def get_projects(cls):
        return cls.query.all()
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "github_url": self.github_url,
            "tech_stack": self.tech_stack,
            'image_url':self.image_url
        }


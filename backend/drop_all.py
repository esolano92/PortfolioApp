
# drop_all.py
import os
from dotenv import load_dotenv

# Force load the production env file
load_dotenv(dotenv_path=".env.production")

from app import app, db

with app.app_context():
    db.drop_all()
    print(" All tables dropped.")

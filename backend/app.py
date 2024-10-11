from flask import Flask
from routes import auth_blueprint, nlp_blueprint  # Ensure correct import of blueprints
from database.db_init import init_db  # Initialize the database

app = Flask(__name__)

# Initialize the database with the app context
init_db(app)

# Register the blueprints
app.register_blueprint(auth_blueprint, url_prefix='/auth')  # Prefix for auth routes
app.register_blueprint(nlp_blueprint, url_prefix='/nlp')    # Prefix for NLP routes

if __name__ == '__main__':
    app.run(debug=True)  # Start the Flask application

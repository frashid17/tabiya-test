from flask import Blueprint, jsonify, request, abort
from services.nlp_service import classify_job
from services.auth_service import login_user

auth_blueprint = Blueprint('auth', __name__)
nlp_blueprint = Blueprint('nlp', __name__)

@auth_blueprint.route('/login', methods=['POST', 'GET'])
def login():
    if request.content_type != 'application/json':
        return jsonify({"error": "Unsupported Media Type. Content-Type must be 'application/json'"}), 415
    
    data = request.get_json()  # Get the JSON data safely
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"error": "Invalid request data"}), 400

    return login_user(data['username'], data['password'])

@nlp_blueprint.route('/match', methods=['POST'])
def match():
    if request.content_type != 'application/json':
        return jsonify({"error": "Unsupported Media Type. Content-Type must be 'application/json'"}), 415

    data = request.get_json()  # Get the JSON data safely
    if not data or 'description' not in data:
        return jsonify({"error": "Invalid request data"}), 400
    
    job_desc = data['description']
    return classify_job(job_desc)

from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# --- MongoDB Connection ---
MONGO_URI = os.getenv("MONGO_URI") 
client = MongoClient(MONGO_URI)
db = client['sip_feedback']
collection = db['feedbacks']

# --- Helper Function ---
def serialize_doc(doc):
    """Converts a MongoDB doc to a JSON-friendly format."""
    if doc and '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc

# --- API Endpoints ---

@app.route('/api/feedback', methods=['GET'])
def get_feedback():
    """This endpoint returns all feedback from the MongoDB collection."""
    try:
        all_feedback = list(collection.find({}))
        serialized_feedback = [serialize_doc(doc) for doc in all_feedback]
        return jsonify(serialized_feedback)
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "Could not retrieve feedback", "details": str(e)}), 500


@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    """This endpoint receives new feedback and saves it to MongoDB."""
    try:
        new_feedback = request.get_json()
        if not new_feedback:
            return jsonify({"error": "Invalid data"}), 400

        required_fields = ["name", "dept", "day", "session", "answers"]
        for field in required_fields:
            if field not in new_feedback:
                return jsonify({"error": f"Missing field: {field}"}), 400

        # Add timestamp
        new_feedback["submitted_at"] = datetime.utcnow()

        result = collection.insert_one(new_feedback)
        return jsonify({
            "status": "success",
            "message": "Feedback saved.",
            "inserted_id": str(result.inserted_id)
        })
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "Could not save feedback", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)

from flask import Flask, request, Response
import jsonpickle
import numpy as np
import cv2
from pymongo import MongoClient
# Initialize the Flask application
app = Flask(__name__)


# route http posts to this method
@app.route('/api/login', methods=['POST'])
def login():
    r = request.json
    print(r)
    uri = "mongodb+srv://user:123@cluster0.uoxjp.mongodb.net/IntelliWaste?retryWrites=true&w=majority"
    client = MongoClient(uri)
    db = client.IntelliWaste
    data = db.Users.find()
    found = False
    verify=False
    user = {}
    for elem in data:
        if elem['email'] == r['email']:
            found = True
            verify = (elem['pass']==r['pass'])
            if verify:
                user['name'] = elem['name']
                user['email'] = elem['email']
                user['carbon_footprint'] = elem['carbon_footprint']
            break
    print(found,verify)

    return ({'found': found, 'verify':verify, 'user' : user})


@app.route('/api/signup', methods=['POST'])
def signup():
    r = request.json
    print(r)
    uri = "mongodb+srv://user:123@cluster0.uoxjp.mongodb.net/IntelliWaste?retryWrites=true&w=majority"
    client = MongoClient(uri)
    db = client.IntelliWaste
    data = db.Users.find()
    for elem in data:
        if elem['email'] == r['email']:
            return ({'found':True, 'message':"Email already exists"})
            break
    r['carbon_footprint'] = 0
    db.Users.insert_one(r)
    return ({'found': False, "Message":"User added"})

# start flask app
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)






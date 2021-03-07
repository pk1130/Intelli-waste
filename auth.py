from keras.models import load_model
import os
from keras.preprocessing import image
from flask import Flask, request, Response
import jsonpickle
import numpy as np
import cv2
from pymongo import MongoClient
from PIL import Image
import random
# Initialize the Flask application
app = Flask(__name__)
img_path = "image0.jpg"

types = ['Compostable', 'Recyclable', 'Trash']

# route http posts to this method


@app.route('/api/login', methods=['POST'])
def login():
    r = request.json
    uri = "mongodb+srv://user:123@cluster0.uoxjp.mongodb.net/IntelliWaste?retryWrites=true&w=majority"
    client = MongoClient(uri, ssl=True, ssl_cert_reqs='CERT_NONE')
    db = client.IntelliWaste
    data = db.Users.find()
    print(data)
    found = False
    verify = False
    user = {}
    for elem in data:
        print(elem)
        if elem['email'] == r['email']:
            found = True
            verify = (elem['pass'] == r['pass'])
            if verify:
                user['name'] = elem['name']
                user['email'] = elem['email']
                user['carbon_footprint'] = elem['carbon_footprint']
            break
    print(found, verify)

    return ({'found': found, 'verify': verify, 'user': user})


@app.route('/api/signup', methods=['POST'])
def signup():
    r = request.json
    print(r)
    uri = "mongodb+srv://user:123@cluster0.uoxjp.mongodb.net/IntelliWaste?retryWrites=true&w=majority"
    client = MongoClient(uri, ssl=True, ssl_cert_reqs='CERT_NONE')
    db = client.IntelliWaste
    data = db.Users.find()
    for elem in data:
        if elem['email'] == r['email']:
            return ({'found': True, 'message': "Email already exists"})
            break
    r['carbon_footprint'] = 0
    db.Users.insert_one(r)
    return ({'found': False, "Message": "User added"})


def process_image(filepath):
    input_im = cv2.imread(filepath)
    input_original = input_im.copy()
    input_original = cv2.resize(
        input_original, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_LINEAR)
    input_im = cv2.resize(input_im, (224, 224), interpolation=cv2.INTER_LINEAR)
    input_im = input_im / 255.
    input_im = input_im.reshape(1, 224, 224, 3)
    return input_im


def get_garbage_type(preds):
    gclass = types[np.argmax(preds)]
    return gclass


def predict_class(modelloc, image):
    model = load_model(modelloc)
    preds = model.predict(image, 1, verbose=0)
    garb_type = get_garbage_type(preds)
    print(preds)
    return garb_type


@app.route('/api/predict', methods=['POST'])
def predict():
    r = request.json
    filepath = r["filepath"]
    image = process_image(filepath)
    garbage = predict_class(
        os.getcwd()+"/classifier/trash_mobilenet.h5", image)
    if garbage == "Recyclable":
        carbon_footprint += random.randint(50, 100)
    return garbage, carbon_footprint


@app.route("/api/test", methods=["POST"])
def test():
    print(request.json)


# start flask app
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000, debug=True)

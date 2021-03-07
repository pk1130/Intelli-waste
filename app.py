import tensorflow as tf
from keras.models import load_model
import os
from keras.preprocessing import image
from flask import Flask, request, Response
import jsonpickle
import numpy as np
import cv2
from pymongo import MongoClient
from PIL import Image

img_path = "./test/image0.jpg"
types = ['Compostable', 'Recyclable', 'Trash']


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


def predict(filepath):
    image = process_image(filepath)
    garbage = predict_class(
        os.getcwd()+"/classifier/trash_mobilenet.h5", image)
    return garbage


print(predict(img_path))

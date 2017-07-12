import os

from flask import Flask
from flask import jsonify
from glob import glob
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

files = []
for file in glob('files/*'):
    try:
        attrs = dict(EasyID3(file))
        attrs['length'] = MP3(file).info.length
        attrs['url'] = file
        files.append(attrs)
    except():
        pass

app = Flask(__name__)

@app.route('/index')
def index():
    return jsonify(files)

# @app.route('/upload')
# def upload():
#     pass
    # update db
    # save file
    # return jsonp
    
    

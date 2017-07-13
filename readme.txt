install steps:
have python 3 installed

pip3 install flask
pip3 install mutagen

create a directory called files in the root of the project and copy some mp3s in there

run:
FLASK_APP=server.py flask run

then also run:
cd mashape-project-js-src && yarn start
(npm start would also work if you dont have yarn installed.)

Then visit localhost:5000 to see the list of songs that I was working from, and see the audio controls (that don't currently work, I just hardcoded what was in my system into the react container.)

What is here:
A flask app that can serve a JSON list of mp3 file attributes, and serve the static mp3 files requested by frontend.

A react app on the frontend that takes a list of mp3 file attributes (currently hardcoded) and makes a datatable, and sets up an <audio> tag.


To do:
Search
Sort
Don't always play the first song
Read file directory on load, don't hardcode index

Nice to haves:
random button
reorder playlist
responsive
album art
expand columns - genre, album, date

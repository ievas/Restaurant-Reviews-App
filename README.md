
## Restaurant Reviews App: Stage 1

### Specification

Students have been provided the code for a restaurant reviews website. Student's job was to update the code to 1) add responsiveness to the page 2) improve accessibility 3) to implement offline availability while still maintaining the included functionality.

### How to set up a local server

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Replace the text <your MAPBOX API KEY HERE> inside of main.js and restaurant_info.js with your key. Both files are in the js folder.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

### Acknowledgements

Matthew Cranford walkthrough: https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/

Mayguen Ojeda's project: https://github.com/Mindgames55/restaurant-reviews-app

### Authors

Starter code: Udacity

Student: Ieva Ritina

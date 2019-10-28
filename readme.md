# Weather App

A simple Async Weather App that adhers to ES-6 Standards and demonstrates features like:
* Dynamic Page templating (including partials) with handlebars
* Object property short hands
* Destructuring
* Callback chaining
* Generic and also custom 404 pages 

## Running the Weather App:

* Update the src/app.js with your own [Mapbox](https://www.mapbox.com/) and [DarkSky](https://darksky.net/dev) API keys
* Run the following commands from the root of directory:
``` 
npm install 
npm run start
```
* To run in Dev,use:

```
npm run dev
```


## Publishing on Heroku:

* Post Updating the API Keys, run the following commands

```
git add .
git commit -m "updated api keys"
heroku create
git push heroku master
```



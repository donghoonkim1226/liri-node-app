//declaring variables

var fs = require("fs");
// var keys = require("./keys.js");
// var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var params = process.argv.slice(2);


// omdb - movie search

switch(params[0]){
  case"movie-this":
  userMovie();
  break;

  default:
  console.log("err")
}

function userMovie(){
  if(params[1] === undefined){
    request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var movieInfo = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                        "Country: " + JSON.parse(body)["Country"] + "\r\n" +
                        "Language: " + JSON.parse(body)["Language"] + "\r\n" +
                        "Plot: " + JSON.parse(body)["Plot"] + "\r\n" +
                        "Actors: " + JSON.parse(body)["Actors"] + "\r\n" +
                        "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoeRating"] + "\r\n" +
                        "Rotten Tomatoes URL: " + JSON.parse(body)["tomatoeUrl"];
        console.log(movieInfo);
        return;
      }
    })
  } else {
    request('http://www.omdbapi.com/?t=' + params[1] + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var movieInfo = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                        "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                        "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                        "Country: " + JSON.parse(body)["Country"] + "\r\n" +
                        "Language: " + JSON.parse(body)["Language"] + "\r\n" +
                        "Plot: " + JSON.parse(body)["Plot"] + "\r\n" +
                        "Actors: " + JSON.parse(body)["Actors"] + "\r\n" +
                        "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoeRating"] + "\r\n" +
                        "Rotten Tomatoes URL: " + JSON.parse(body)["tomatoeUrl"];
        console.log(movieInfo);
        return;
      }
    })    
  }
}

// spotify

function userSong(){
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   console.log(data);
  });
}


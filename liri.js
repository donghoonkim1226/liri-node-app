//declaring variables

var fs = require("fs");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");

var params = process.argv.slice(2);

var Twitter = require("twitter");
 
var client = new Twitter({

  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});
console.log(client);

switch(params[0]){

  case"movie-this":
  userMovie();
  break;

  case"spotify-this":
  userSong();
  break;

  case"my-tweets":
  userTweets();
  break;

  default:
  console.log("err")
}

// Enter title of movie to get the Title, Year, IMDB Rating, Country, Language, Plot, Actor, Rotten Tomatoes Rating and Rotten Tomators URL.

function userMovie(){
  if(params[1] === undefined){
    request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
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
    request("http://www.omdbapi.com/?t=" + params[1] + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
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
    });    
  }
}

// Enter song title to return Artist, Song Name, Album Name & 30 second preview.

function userSong(){
  if(params[1] === undefined){
    spotify.search({ type: "track", query: "what’s my age again" }, function(err, data) {
      if (err) {
        console.log("err");
        return;
      } else {
        var songInfo = "Artist: " + data.tracks.items[0].artists[0].name + "\r\n" +
                       "Song Name: " + data.tracks.items[0].name + "\r\n" +
                       "Album Name: " + data.tracks.items[0].album.name + "\r\n" +
                       "Preview URL: " + data.tracks.items[0].preview_url
        console.log(songInfo);
      }
    });
  } else {
    spotify.search({ type: "track", query: params[1] }, function(err, data) {
      if (err) {
        console.log("err");
        return;
      } else {
        var songInfo = "Artist: " + data.tracks.items[0].artists[0].name + "\r\n" +
                       "Song Name: " + data.tracks.items[0].name + "\r\n" +
                       "Album Name: " + data.tracks.items[0].album.name + "\r\n" +
                       "Preview URL: " + data.tracks.items[0].preview_url
        console.log(songInfo);
      }
    }); 
  }
}



  function  userTweets(){
    client.get("statuses/user_timeline", {screen_name: "donghoonnn"}, function(error, tweets, response){
      if (error) {
        console.log(error);
        return;
      } 
    });
  }
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// http://www.omdbapi.com/?i=tt3896198&apikey=dd83adb5


const axios = require('axios');
var keys = require("./keys.js");

require('dotenv').config()

var inquirer = require('inquirer');

var action = process.argv[2];
var parameter = process.argv[3];

function switchCase() {

    switch (action) {
        case 'concert-this':
            bandsInTown(parameter);
            break;
        case 'spotify-this-song':
            spotSong(parameter);
            break;
        case 'movie-this':
            movieInfo(parameter);
            break;
        case 'do-what-it-says':
            getRandom();
            break;
        default:
            logIt("Invalid Input");
            break;
    }
};
switchCase();


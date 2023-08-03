<<<<<<< HEAD
//require("dotenv").configDotenv();
const express = require("express");
const cors = require("cors");
//const port = process.env.PORT;
//const apiKey = process.env.API_KEY;
const port = 3000;
const countries = require("./countries.json");
=======
require("dotenv").config();
const fetch = require('node-fetch-commonjs');
const express = require('express');
const cors = require('cors');

// const port = process.env.PORT;
const apiKey = process.env.API_KEY;
const url = 'http://api.weatherstack.com/current'
const query = 'Montevideo';

// const port = process.env.PORT || 3000;
const port = 3000


const countries = require('./countries.json')
const images = require('./images')
>>>>>>> b22ff9b1f6fe926894bf09cb9d36a2a74322ad88

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// app.use(express.static('frontend'));
app.use(express.static("frontend/homepage"));
app.use("/art", express.static("frontend/art"));
app.use("/music", express.static("frontend/music"));
app.use("/language", express.static("frontend/language"));
app.use("/history", express.static("frontend/history"));
app.use("/countryhomepage", express.static("frontend/countryhomepage"));
app.use("/map", express.static("frontend/map"));
app.use("/upload", express.static("frontend/art/gallery"));
=======


app.use(express.static('frontend/homepage'));
app.use('/art', express.static('frontend/art'));
app.use('/music', express.static('frontend/music'));
app.use('/language', express.static('frontend/language'));
app.use('/history', express.static('frontend/history'));
app.use('/countryhomepage', express.static('frontend/countryhomepage'));
app.use('/map', express.static('frontend/map'));
app.use('/weather', express.static('frontend/weather'));

app.use(express.static('images'));



>>>>>>> b22ff9b1f6fe926894bf09cb9d36a2a74322ad88


<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("frontend/index.html");
});
=======
app.get('/', (req, res) => {
    res.send('frontend/map.html')
})
>>>>>>> b22ff9b1f6fe926894bf09cb9d36a2a74322ad88

app.get("/countriesData", (req, res) => {
  res.send(countries);
});

app.get("/art", (req, res) => {
  res.send("/art.index.html");
});

<<<<<<< HEAD
app.get("/music", (req, res) => {
  fetch("https://api.spotify.com").catch((err) => {
    console.log("rejected", err);
  });
  res.send("/music.index.html");
});

app.get("/language", (req, res) => {
  res.send("/language.index.html");
});
=======

app.get('/music', (req, res) => {
    res.send('/music.index.html')
})

app.post('/music', (req, res) => {
    const newReview = req.body
    console.log(newReview)
    console.log(countries)
    countries[0]["review"] = newReview
    console.log(countries)
    res.status(201).send(newReview)
})

app.get('/language', (req, res) => {
    res.send('/language.index.html')
})
>>>>>>> b22ff9b1f6fe926894bf09cb9d36a2a74322ad88

app.get(`/history`, (req, res) => {
  const factsAboutUruguay = countries[0].factsAboutUruguay;

  const randomFact =
    factsAboutUruguay[Math.floor(Math.random() * factsAboutUruguay.length)];

  res.json({ randomFact });
});

app.get("/countryhomepage", (req, res) => {
  res.send("/countryhomepage.index.html");
});

app.get("/map", (req, res) => {
  res.send("/map.index.html");
});

app.get('/getRandomImage', (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    res.json(randomImage);
})



app.use( '/weather',  async (req, res) => {
    try {
        const response = await fetch(`${url}?access_key=${apiKey}&query=${query}`);
        if (response.ok) {
            const locationWeather = await response.json();
            res.send(locationWeather);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log('Error fetching weather data:', err);
        res.sendStatus(500);
    }
});


app.listen(port, () => {
  console.log(`API listening on port ${port}.`);
});

require("dotenv").config();
const express = require('express');
const cors = require('cors');

const countries = require('./countries.json')
const images = require('./images')

import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'https://lots-of-locations-lol.onrender.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));

// app.use(express.static('frontend'));
app.use(express.static('frontend/homepage'));
app.use('/art', express.static('frontend/art'));
app.use('/music', express.static('frontend/music'));
app.use('/language', express.static('frontend/language'));
app.use('/history', express.static('frontend/history'));
app.use('/countryhomepage', express.static('frontend/countryhomepage'));
app.use('/map', express.static('frontend/map'));


app.use(express.static('images'));





app.get('/', (req, res) => {
    res.send('frontend/index.html')
})

app.get('/countriesData', (req, res) => {
    res.send(countries)
})

app.get('/art', (req, res) => {
    res.send('/art.index.html')
})


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

app.get('/countryhomepage', (req, res) => {
    res.send('/countryhomepage.index.html')
})

app.get('/map', (req, res) => {
    res.send('/map.index.html')
})

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
})


require("dotenv").configDotenv();
const fetch = import('node-fetch'); // Make sure to import the fetch library
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
//const port = 3000;
const query = 'Montevideo';
const url = 'http://api.weatherstack.com/current';
const countries = require('./countries.json')


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
app.use('/upload', express.static('frontend/art/gallery'))

// app.use(express.static('/frontend/history/history.html'));
// app.use(express.static('/frontend/music/music.html'));
// app.use(express.static('/frontend/language/language.html'));

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
    fetch("https://api.spotify.com")
    .catch((err) => {
        console.log('rejected', err)
    })
    res.send('/music.index.html')
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



app.use( async (req, res) => {
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


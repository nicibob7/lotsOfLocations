require("dotenv").config();
const fetch = require('node-fetch-commonjs');
const express = require('express');
const cors = require('cors');

const port = 3000
const apiKey = "ad15d95bd5fa173b58f47fc05e070598"
const url = 'http://api.weatherstack.com/current'
const query = 'Montevideo';




const countries = require('./countries.json')
const images = require('./images')

const app = express();
app.use(cors());
app.use(express.json());



app.use(express.static('frontend/map'));
app.use('/art', express.static('frontend/art'));
app.use('/music', express.static('frontend/music'));
app.use('/language', express.static('frontend/language'));
app.use('/history', express.static('frontend/history'));
app.use('/countryhomepage', express.static('frontend/countryhomepage'));
app.use('/map', express.static('frontend/map'));
app.use('/weather', express.static('frontend/weather'));

app.use(express.static('images'));





app.get('/', (req, res) => {
    res.send('frontend/map.html')
})

app.get("/countriesData", (req, res) => {
  res.send(countries);
});

app.get("/art", (req, res) => {
  res.send("/art.index.html");
});


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

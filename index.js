const express = require('express');
const cors = require('cors');
const port = 3000;
const countries = require('./countries.json')

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('frontend/homepage'));

app.get('/', (req, res) => {
    res.send('frontend/index.html')
})

app.get('/countriesData', (req, res) => {
    res.send(countries)
})

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})

const express = require('express');
const cors = require('cors');
const port = 3000;
const countries = require('./countries.json')


const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.static('frontend'));
app.use(express.static('frontend/homepage'));
app.use('/art', express.static('frontend/art'));
app.use('/music', express.static('frontend/music'));
app.use('/language', express.static('frontend/language'));
app.use('/history', express.static('frontend/history'));
app.use('/countryhomepage', express.static('frontend/countryhomepage'));
<<<<<<< HEAD
=======
app.use('/map', express.static('frontend/map'));
app.use('/upload', express.static('frontend/art/gallery'))

>>>>>>> 1362295a595369f4696f0a330850a6d6a9c9d40c

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
    res.send('/music.index.html')
})

app.get('/language', (req, res) => {
    res.send('/language.index.html')
})

app.get('/countryhomepage', (req, res) => {
    res.send('/countryhomepage.index.html')
})
<<<<<<< HEAD
=======

app.get('/map', (req, res) => {
    res.send('/map.index.html')
})



>>>>>>> 1362295a595369f4696f0a330850a6d6a9c9d40c

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})



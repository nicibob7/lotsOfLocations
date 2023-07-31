const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('frontend'));
app.use(express.static('/frontend/art/art.html'));
app.use(express.static('/frontend/history/history.html'));
app.use(express.static('/frontend/music/music.html'));
app.use(express.static('/frontend/language/language.html'));

app.get('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})



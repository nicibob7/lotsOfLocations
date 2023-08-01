



const map = L.map('map').setView([10.505, 1], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 2, //max zoom initially 2 - cannot zoom in to see names of place //set back to tqo so you cannot see the name 
    minZoom: 2, //cannot zoom out from start
    
}).addTo(map); 



let answers; //initialising answers, then will be assigned when json object is fetched, the answers will then hold the value of the key answer
let questions; ////initialising questions, then will be assigned when json object is fetched, the answers will then hold the value of the key answer

const popUpContent = document.querySelector('.popup-content')
const question = document.querySelector('.popup-content p')
const userInput = document.querySelector('.popup-content')
const labelElement = document.querySelector('label[for="answer"]');
const inputElement = document.querySelector('#answer');


//initialising the map from leaflet - setting the view lon and lat, and zoom level
// let map = L.map('map').setView([10.505, 1], 2);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 2, //max zoom initially 2 - cannot zoom in to see names of place //set back to tqo so you cannot see the name 
//     minZoom: 2, //cannot zoom out from start
    
// }).addTo(map); 

const submitAnswer = document.querySelector('#submitAnswer');
const marker = L.marker([-32.33, -55.48]).addTo(map);

submitAnswer.addEventListener('click', submit)


marker.bindPopup(popUpContent).openPopup();


function submit(e) {
    e.preventDefault();
    let answerInput = answer.value.toLowerCase();

    if (answerInput === 'uruguay') {
        console.log(answerInput);
        answer.value = '';
        alert('Correct! Now try the next question');
        question.textContent = "What is the capital city of this country?";
    } else if (answerInput === 'montevideo') {
        console.log(answerInput);
        answer.value = '';
        alert('Correct! Now try the next question');
        question.textContent = "What language is spoken most in this country?";
    } else if (answerInput === 'spanish') {
        console.log(answerInput);
        answer.value = '';
        alert('Correct! Ready to learn about Uruguay? Press the button below to enter the page');
        question.textContent = "Press the button here to learn about uruguay!";
        submitAnswer.textContent = 'PRESS HERE'
        labelElement.remove();
        inputElement.remove();
        submitAnswer.addEventListener('click', function() {
            window.location.href = 'https://www.bbc.com'
        })
    } else {
        alert('Wrong answer, please try again!');
        answer.value = '';
    }
}


function secondQuestion(e) {
    e.preventDefault();
    let answerInput = answer.value.toLowerCase();
    if (answerInput === 'montevideo') {
        console.log(answerInput);
        answer.value = '';
        alert('Correct! Now can you do one more to enter the next page?')
    question.textContent = "What is the population size of this country?"

    } else {
        alert('Wrong answer! Please try again, hint is: the last fice letters spell video');
        answer.value = '';
    }
}



//function to get the questions from our data to then show on the screen
async function getQuestions() {
    try {
        const reponse = await fetch(apiUrl);
        if (repsonse.ok) {
            answers = await response.json();
        } else {
            throw("failed to get quotes")
        }
    } catch (e) {
        console.log(e)
    }
}

//function that will retrieve the answers from our data
async function getAnswers() {
    try {
        const reponse = await fetch(apiUrl);
        if (repsonse.ok) {
            answers = await response.json();
        } else {
            throw("failed to get quotes")
        }
    } catch (e) {
        console.log(e)
    }
}



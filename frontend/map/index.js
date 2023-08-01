// const steps = require('./questions')
let map = L.map('map').setView([10.505, 1], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 2, //max zoom initially 2 - cannot zoom in to see names of place //set back to tqo so you cannot see the name 
    minZoom: 2, //cannot zoom out from start
    
}).addTo(map); 





const popUpContent = document.querySelector('.popup-content')
const question = document.querySelector('.popup-content p')
const userInput = document.querySelector('.popup-content')
const labelElement = document.querySelector('label[for="answer"]');
const inputElement = document.querySelector('#answer');
const submitAnswer = document.querySelector('#submitAnswer');
const marker = L.marker([-32.33, -55.48]).addTo(map);
const howToPlay = document.querySelector('#container')
let isShowingRules = false;





const questions = [
    {
      question: "What country is this?",
      correctAnswer: "uruguay",
      nextQuestion: "What is the capital city of this country?",
    },
    {
      question: "What is the capital city of this country?",
      correctAnswer: "montevideo",
      nextQuestion: "What language is spoken most in this country?",
    },
    {
      question: "What language is spoken most in this country?",
      correctAnswer: "spanish",
      nextQuestion: "Press the button here to learn about Uruguay!",
    },
  ];

  let currentQuestionIndex = 0;

  function moveToNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        question.textContent = questions[currentQuestionIndex].question;
        answer.value = '';
    } else {
        alert('All the questions have been answered,now time to learn about Uruguay!');
        question.textContent = questions[currentQuestionIndex - 1].nextQuestion;
        submitAnswer.style.fontSize = "50px";
        submitAnswer.textContent = 'PRESS HERE';
        const labelElement = document.querySelector("label[for='answer']");
        labelElement.remove();
        answer.remove();
        submitAnswer.addEventListener("click", function () {
            window.location.href = "https://www.bbc.com";
        });
    }
  }

  submitAnswer.addEventListener('click', function (e) {
    e.preventDefault();
    const answerInput = answer.value.toLowerCase();
    
    if (answerInput === questions[currentQuestionIndex].correctAnswer) {
        console.log(answerInput);
        answer.value = '';
        alert("Correct! Now try the next one");
        moveToNextQuestion();
    } else {
        alert("Wrong answer, please try again!")
        answer.value = '';
        
    }
  });

  question.textContent = questions[currentQuestionIndex].question;

  marker.bindPopup(popUpContent).openPopup();

  


howToPlay.addEventListener('click', toggleRules)




function toggleRules() {
    if (isShowingRules) {
        const paragraph = howToPlay.querySelector('p');
        if (paragraph) {
            howToPlay.removeChild(paragraph);
        }
        isShowingRules = false;
    } else {
        const paragraph = document.createElement('p');
    paragraph.textContent = "To enter and learn about a specific country, you need to enter three correct answers to the questions provided. If sucessfully answered, a button will appear to enter the country page. If for any reason you are in doubt after 5 incorrect tries, a button will appear in the popup that will lead you to the page. Good luck!";
   howToPlay.appendChild(paragraph);
   isShowingRules = true;
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



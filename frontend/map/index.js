
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
      hint: "Hint: It's a country in South America",
    },
    {
      question: "What is the capital city of this country?",
      correctAnswer: "montevideo",
      nextQuestion: "What language is spoken most in this country?",
      hint: "Hint: It's a ten letter word, the last five letters spell video",
    },
    {
      question: "What language is spoken most in this country?",
      correctAnswer: "spanish",
      nextQuestion: "Press the button here to learn about Uruguay!",
      hint: "Hint: This is the word spelt backwards - hsinaps",
    },
  ];



  let currentQuestionIndex = 0;
  let consecutiveWrongAnswers = 0;
  




  function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length ) {
        question.textContent = questions[currentQuestionIndex].question;
        answer.value = '';
        }

        if (currentQuestionIndex === 1) {
          inputElement.placeholder = "eg Paris";
        } else if (currentQuestionIndex === 2) {
          inputElement.placeholder = "eg English";
        }
    }
  
  submitAnswer.addEventListener('click', function (e) {
    e.preventDefault();
    const answerInput = answer.value.toLowerCase();
    if (answerInput === questions[currentQuestionIndex].correctAnswer) {
        console.log(answerInput);
        answer.value = '';
        
        consecutiveWrongAnswers = 0;

        if (currentQuestionIndex < questions.length - 1) {
            alert('Correct! Now try the next one');
            
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',  {
                maxZoom: 4,
                minZoom: 2,
            }).addTo(map);
        } else {
            alert('All the questions have been answered, now time to learn about Uruguay!');
            
      question.textContent = questions[currentQuestionIndex].nextQuestion;
      submitAnswer.style.fontSize = '50px';
      submitAnswer.textContent = 'PRESS HERE';
      const labelElement = document.querySelector("label[for='answer']");
      labelElement.remove();
      answer.remove();
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',  {
                maxZoom: 19,
               
            }).addTo(map);
      currentZoomLevel = map.getZoom();
         map.setZoom(currentZoomLevel + 8);
      submitAnswer.addEventListener('click', function () {
        window.location.href = '/countryhomepage';
      });

        }
         
        map.setView([-30, -55], 4);
        moveToNextQuestion();
        consecutiveWrongAnswers = 0;
        

    } else {
        consecutiveWrongAnswers++;
        answer.value = '';  
    }
    if (consecutiveWrongAnswers === 1) {
        alert ("Wrong answer, please try again!");
    } else if (consecutiveWrongAnswers >= 2) {
        alert(questions[currentQuestionIndex].hint)  
    }
  });

  function toggleRules() {
    if (isShowingRules) {
        const paragraph = howToPlay.querySelector('p');
        if (paragraph) {
            howToPlay.removeChild(paragraph);
        }
        isShowingRules = false;
    } else {
        const paragraph = document.createElement('p');
    paragraph.textContent = "To explore and discover more about a particular country, you must first answer three questions correctly. Upon successfully answering these questions, a button will emerge, granting you access to the country's page. If you encounter difficulty and provide two incorrect answers, a helpful hint will appear in the form of an alert, guiding you toward the correct path. After all questions are answered, the map's zoom function will become available, allowing you to enjoy a closer look at various regions before entering the country. Happy exploring, and good luck!";
   howToPlay.appendChild(paragraph);
   isShowingRules = true;
    }
}

  question.textContent = questions[currentQuestionIndex].question;

  marker.bindPopup(popUpContent).openPopup();

  howToPlay.addEventListener('click', toggleRules)




  inputElement.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) { 
        e.preventDefault();
        submitAnswer.click(); 
    }
});

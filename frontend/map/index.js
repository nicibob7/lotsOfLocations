let answers; //initialising answers, then will be assigned when json object is fetched, the answers will then hold the value of the key answer
let questions; ////initialising questions, then will be assigned when json object is fetched, the answers will then hold the value of the key answer


//initialising the map from leaflet - setting the view lon and lat, and zoom level
const map = L.map('map').setView([45.505, 9], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 3, //max zoom initially 2 - cannot zoom in to see names of place //set back to tqo so you cannot see the name 
    minZoom: 2, //cannot zoom out from start
    
}).addTo(map); 

const submitAnswer = document.querySelector('#submitAnswer');
const marker = L.marker([39.5, -2]).addTo(map);

submitAnswer.addEventListener('click', submit)

marker.bindPopup("Guess what country I am!<br> You can input your answer in the box below.").openPopup();

// //intitial pop up that enabled it to be onclick where two messages were shown  eg spain outline to cover the area of spain that can then be clicked on 
// const spainIcon = L.icon({
//     //iconUrl: 'assets/spainoutline.png',
//     iconSize:     [179, 132], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 90], // point of the icon which will correspond to marker's location
//     shadowAnchor: [9, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// const initialPopUp = 'Guess what country I am!<br> You can input your answer in the box below.';

// const secondPopUp = 'Guess again! ';

// const popUp = L.marker([38.5547, - 7.99], {icon: spainIcon}).addTo(map).bindPopup(initialPopUp);

// let isInitialContent = true;

// function changePopUp() {
//     if (isInitialContent) {
//         popUp.setPopupContent(initialPopUp)
//     } else {
//         popUp.setPopupContent(secondPopUp);
//     }
//     isInitialContent = !isInitialContent;

//     popUp.openPopup();
// }
// popUp.on('click', changePopUp);



//making a function that checks the answer is right (and making it lowercase) then logs it to the console and clears the field, if not it alerts wrong answer please try again
function submit(e) {
    e.preventDefault();
    let answerInput = answer.value.toLowerCase()

    if (answerInput === 'spain'){
        console.log(answerInput);
    answer.value = '';
    } else {
    alert('wrong answer, please try again')
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


const musicForm = document.querySelector("#musicForm")

// const express = require('express')
// const cors = require('cors');
// app.use(cors());

function myFunction(e){
    console.log(e)
    console.log(e.event)
    fetch("https://api.spotify.com")
    .catch((err) => {
        console.log('rejected', err)
    })
}

musicForm.addEventListener("submit", getAnswer)

function getAnswer(e){
    e.preventDefault()
    console.log(e.target.musicQuiz.value)
    const answer = e.target.musicQuiz.value
    checkAnswer(answer)
    e.target.musicQuiz.value = ""
}

function checkAnswer(value){
    fetch("http://127.0.0.1:3000/countriesData")
    .then((response) => {
    console.log('resolved', response)
    return response.json()
}).then(data => {
    console.log(data)
    return data[0]
}).then(data => {
    console.log(data)
    return data["quiz_answers"]
}).then(data => {
    console.log(data)
    if(value.toLowerCase() === data[0].toLowerCase()){
        console.log(`Yay!`)
        document.querySelector("#answer").textContent = `CORRECT!`
    }
    else if(value){
        document.querySelector("#answer").textContent = `INCORRECT!`
    }
    else{
        document.querySelector("#answer").textContent = `PLEASE ENTER AN ANSWER!`
    }
})
    .catch((err) => console.log(`Unable to retrieve data`))
}
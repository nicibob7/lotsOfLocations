const musicForm = document.querySelector("#musicForm")
const reviewForm = document.querySelector("#musicReview")
let arr = []
let review = ""
let reviewer = ""

// const express = require('express')
// const cors = require('cors');
// app.use(cors());

musicForm.addEventListener("submit", getAnswer1)
musicForm.addEventListener("submit", getAnswer2)
musicForm.addEventListener("submit", getAnswer3)
musicForm.addEventListener("submit", getAnswer4)
musicForm.addEventListener("submit", getAnswer5)

reviewForm.addEventListener("submit", getReview)
reviewForm.addEventListener("submit", getName)

function getAnswer1(e){
    e.preventDefault()
    console.log(e.target.musicQuiz1.value)
    const answer1 = e.target.musicQuiz1.value
    arr[arr.length] = answer1
    console.log(arr)
    e.target.musicQuiz1.value = ""
    
}

function getAnswer2(e){
    e.preventDefault()
    console.log(e.target.musicQuiz2.value)
    const answer2 = e.target.musicQuiz2.value
    arr[arr.length] = answer2
    console.log(arr)
    e.target.musicQuiz2.value = ""
}

function getAnswer3(e){
    e.preventDefault()
    console.log(e.target.musicQuiz3.value)
    const answer3 = e.target.musicQuiz3.value
    arr[arr.length] = answer3
    console.log(arr)
    e.target.musicQuiz3.value = ""
}

function getAnswer4(e){
    e.preventDefault()
    console.log(e.target.musicQuiz4.value)
    const answer4 = e.target.musicQuiz4.value
    arr[arr.length] = answer4
    console.log(arr)
    e.target.musicQuiz4.value = ""
}

function getAnswer5(e){
    e.preventDefault()
    console.log(e.target.musicQuiz5.value)
    const answer5 = e.target.musicQuiz5.value
    arr[arr.length] = answer5
    console.log(arr)
    checkAnswer(arr)
    e.target.musicQuiz5.value = ""
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
    return data.quiz_answers
}).then(data => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase()
        data[i] = data[i].toLowerCase()
    }
    console.log(arr)
    console.log(data)
    let counter = 0
    for(let i = 0; i < data.length; i++){
        if(arr[i] === data[i]){
            console.log(`Yay`)
            counter++
        }
        console.log(counter)
    }
    document.querySelector("#answer").textContent = `You scored ${counter}/${data.length}`
    arr = []
    console.log(arr)
})
    .catch((err) => console.log(`Unable to retrieve data`))
}

function getReview(e){
    e.preventDefault()
    console.log(e.target.Review.value)
    review = e.target.Review.value
}

async function getName(e){
    e.preventDefault()
    console.log(e.target.ReviewName.value)
    reviewer = e.target.ReviewName.value
    let reviewObj = {}
    reviewObj["name"] = reviewer
    reviewObj["text"] = review
    console.log(reviewObj)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    }

    const response = await fetch("http://127.0.0.1:3000/music", options)
    .then(response => {
        console.log(response)
        return response.json()
    }).then(response => {
        console.log(response.name)
        document.querySelector("#Reviews").textContent = `${response.text} - from ${response.name}`
    }).catch((err) => {
        console.log(err, "Error")
    })
}


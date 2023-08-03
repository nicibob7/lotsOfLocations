const column = document.querySelector(".column");

column.addEventListener("click", flipColumn);

// Function to flip the column when clicked
function flipColumn() {
  // Check if the column doesn't have the "flipped" class
  if (!column.classList.contains("flipped")) {
    // Add the "flipped" class to the column to trigger the flip effect
    column.classList.add("flipped");
    // Remove the click event listener from the column after flipping to prevent multiple flips
    column.removeEventListener("click", () => flipColumn());
  }
}

document.getElementById("submitBtn").addEventListener("click", calculateScore);

// Loop through each submit button and add a click event listener that calls the calculateScore() function when clicked
function calculateScore() {
  let score = 0;

  const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "d",
  };

  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    const selectedAnswer = question.querySelector("input[name]:checked");
    if (selectedAnswer) {
      const questionName = selectedAnswer.getAttribute("name");
      const userAnswer = selectedAnswer.value;
      const correctAnswer = correctAnswers[questionName];

      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  });

  document.getElementById("score").textContent = `${score} out of 4!`;
  document.getElementById("score-box").style.display = "block";
  document.getElementById("submitBtn").disabled = true; // Disable the submit button after the first attempt
}

document
  .getElementById("randomFactButton")
  .addEventListener("click", getRandomFact);

function getRandomFact() {
  fetch("http://127.0.0.1:3000/countriesData")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      return data[0];
    })
    .then((data) => {
      console.log(data);
      const uruguayFacts = data.factsAboutUruguay;
      const randomFact =
        uruguayFacts[Math.floor(Math.random() * uruguayFacts.length)];

      document.getElementById("randomFactText").style.display = "block";
      document.getElementById("randomFactText").innerText = randomFact;
    })
    .catch((e) => {
      console.log("Error fetching random fact", e);
    });
}

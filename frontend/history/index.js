// Get all elements with the class "question-form" and store them in the questionsForms array
const questionsForms = document.getElementsByClassName("question-form");
// Get all buttons with the attribute type="button" and store them in the submitButtons array
const submitButtons = document.querySelectorAll('button[type="button"]');
const column = document.querySelector(".column");

column.addEventListener("click", () => flipColumn());

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

  document.getElementById("score").textContent = score;
  document.getElementById("score-box").style.display = "block";
  document.getElementById("submitBtn").disabled = true; // Disable the submit button after the first attempt
}

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

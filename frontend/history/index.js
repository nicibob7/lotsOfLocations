// Get all elements with the class "question-form" and store them in the questionsForms array
const questionsForms = document.getElementsByClassName("question-form");
// Get all buttons with the attribute type="button" and store them in the submitButtons array
const submitButtons = document.querySelectorAll('button[type="button"]');
const columns = document.querySelectorAll(".column");

// Loop through each submit button and add a click event listener that calls the calculateScore() function when clicked
for (let i = 0; i < submitButtons.length; i++) {
  submitButtons[i].addEventListener("click", () => calculateScore());
}
// Add an event listener to each "column" div
for (let i = 0; i < columns.length; i++) {
  const column = columns[i];
  column.addEventListener("click", () => flipColumn(i + 1));
}

// Function to calculate the user's score based on their quiz answers
function calculateScore() {
  let totalScore = 0;

  // Loop through each question form
  for (let i = 0; i < questionsForms.length; i++) {
    const form = questionsForms[i];
    // Get the first element with the class "question" inside the form
    const questions = form.getElementsByClassName("question")[0];
    // Get all radio input elements inside the "question" element
    const inputs = questions.querySelectorAll('input[type="radio"]');
    // Get the correct answer for the question from the custom HTML attribute, "data-correct"
    const correctAnswer = questions.getAttribute("data-correct");
    // Flag to check if the user selected the correct answer for this question
    let isCorrect = false;
    // Loop through each radio input and check if the user selected the correct answer
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].checked && inputs[j].value === correctAnswer) {
        totalScore++;
        isCorrect = true;
        break;
      }
    }
    // Change submit button green if answer is correct
    const submitButton = form.querySelector('button[type="button"]');
    submitButton.style.backgroundColor = isCorrect ? "green" : "#0088a9";
  }
  for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].removeEventListener("click", () => calculateScore());
  }
  showResult(totalScore);
}
// Function to display the user's total score
function showResult(score) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Your total score is: ${score} out of 4`;
}
// Function to flip the column when clicked
function flipColumn(columnNumber) {
  // Uses the ":nth-child" pseudo-class to specify which "column" element to select, based on its position within its parent element. (Starts from 1)
  const column = document.querySelector(`.column:nth-child(${columnNumber})`);
  // Check if the column doesn't have the "flipped" class
  if (!column.classList.contains("flipped")) {
    // Add the "flipped" class to the column to trigger the flip effect
    column.classList.add("flipped");
    // Remove the click event listener from the column after flipping to prevent multiple flips
    column.removeEventListener("click", () => flipColumn(columnNumber));
  }
}

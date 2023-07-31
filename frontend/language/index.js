
document.addEventListener("DOMContentLoaded", function () {
            var colorArray = ["#019875", "#1E8BC3", "#D91E18", "#D35400", "#8E44AD", "#C0392B"];
            var cardState;
            var currentQuestion = 0;
            var qbank = [];

            loadDB();

            function loadDB() {
                fetch("activity.json")
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        for (i = 0; i < data.questionlist.length; i++) {
                            qbank[i] = [];
                            qbank[i][0] = data.questionlist[i].cardfront;
                            qbank[i][1] = data.questionlist[i].cardback;
                        }
                        beginActivity();
                    })
                    .catch(function (error) {
                        console.error("Error fetching data: " + error);
                    });
            }

            function beginActivity() {
                cardState = 0;
                var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
                var cardArea = document.getElementById("cardArea");
                cardArea.innerHTML = '';
                cardArea.innerHTML += '<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>';
                cardArea.innerHTML += '<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>';
                var card1 = document.getElementById("card1");
                var card2 = document.getElementById("card2");
                card1.style.backgroundColor = color1;
                card2.style.backgroundColor = "#34495E";
                card2.style.top = "200px";
                cardArea.addEventListener("click", function () {
                    if (cardState !== 1) {
                        cardState = 1;
                        animateCards();
                    }
                });
                currentQuestion++;
                var buttonArea = document.getElementById("buttonArea");
                buttonArea.innerHTML = '';
                buttonArea.innerHTML += '<div id="nextButton">NEXT</div>';
                var nextButton = document.getElementById("nextButton");
                nextButton.addEventListener("click", function () {
                    if (currentQuestion < qbank.length) {
                        beginActivity();
                    } else {
                        displayFinalMessage();
                    }
                });
            }

            function animateCards() {
                var card1 = document.getElementById("card1");
                var card2 = document.getElementById("card2");
                card1.animate([
                    { top: "0px" },
                    { top: "-200px" }
                ], {
                    duration: 150,
                    fill: "forwards"
                }).onfinish = function () {
                    togglePosition(card1);
                };
                card2.animate([
                    { top: "200px" },
                    { top: "-200px" }
                ], {
                    duration: 150,
                    fill: "forwards"
                }).onfinish = function () {
                    togglePosition(card2);
                    cardState = 0;
                };
            }

            function togglePosition(card) {
                if (card.style.top === "-200px") {
                    card.style.top = "200px";
                }
            }

            function displayFinalMessage() {
                var buttonArea = document.getElementById("buttonArea");
                var cardArea = document.getElementById("cardArea");
                buttonArea.innerHTML = '';
                cardArea.innerHTML = '';
                cardArea.innerHTML += '<div id="finalMessage">You have finished the activity.</div>';
            }
        });
 
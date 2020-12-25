var startButton = document.createElement("button");
var makeChoice = document.getElementById("container");
var questionAsk = document.createElement("h2");
var highScore = document.getElementById("high-score");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
var lock = false;
var questions = [];
var listOfNames = [];
var listOfScores = [];
//allows user to go directly to highscore list
highScore.onclick = function () {
    renderScores();
}

fromStorage();

function start() {
time=60;
lock = false;
counter = 0;
document.getElementById("container").innerHTML = "";
startButton.setAttribute("class", "btn btn-primary btn-lg btn-block");
startButton.textContent = "Start The Quiz, REMEMBER You only have 60 seconds";
document.getElementById("container").append(startButton);
startButton.onclick = function () { timer(); whichQuestion(); sendQuestions() };
}
start();
// //List of Questions that can appear on the quiz
var question1 = [
    "If I want to convert the string 1.325 to a number what should I use?",
    "ParseInt()",
    "ParseFloat()",
    "String.push()",
    "JSON.stringify()"
];
var question2 = [
    "What will the array.length(fruits) return given fruits['apple','banana','orange','pear'];?",
    "4",
    "3",
    "5",
    "1"
];
var question3 = [
    "What will array.push('pumpkin') do to the array vegetables['potato'];?",
    "['potato','pumpkin'];",
    "['potato pumpkin'];",
    "['pumpkin','potato']",
    "['pumpkin potato']"
];
var question4 = [
    "What is the difference between a global variable and a local variable in Javascript?",
    "A global variable always has the same value",
    "A global variable is only usable in certain areas while a local variable is usable everywhere",
    "local variables are outside of functions while global variables are inside of functions",
    "a global variable appears before all other scripts so it can be accessed anywhere while local variables are cannot be used anywhere"
];
var question5 = [
    "What is the appropriate way to generate a random number between 0 and 5",
    "Math.floor(Math.random()) * 5",
    "math.floor(math.random()) * 6",
    "Math.floor(Math.random()) * 6",
    "Math.ceiling(Math.random()) * 6"
];

//Randomly Selects the question to use
function whichQuestion() {

    var questionOrder = [1, 2, 3, 4, 5];

    while (questionOrder.length > 0) {
        var index = Math.floor(Math.random() * (questionOrder.length));
        var chosenQuestion = questionOrder[index];
        questions.push(chosenQuestion);
        questionOrder.splice(index, 1);
    }
}
//Starts the quiz

//Times how long the quiz will last
function timer() {
    time = 59;
    startButton.parentNode.removeChild(startButton);
    var timeLeft = document.getElementById("timer");
    myTimer = setInterval(function () {
        if (time < 0 || lock === true) {
            alert("QUIZ OVER");
            clearInterval(myTimer);
            exitQuiz();
        } else {
            timeLeft.innerHTML = time;
            time--;
        }
    }, 1000);
}
//sets the appropriate text and answer for each question
function ThisQuestion(questionPicked) {

    questionPicked = parseInt(questionPicked);

    if (questionPicked === 1) {
        questionAsk.textContent = (question1[0]);
        option1.textContent = (question1[1]);
        option2.textContent = (question1[2]);
        option3.textContent = (question1[3]);
        option4.textContent = (question1[4]);
        option1.setAttribute("onclick", "wrong(); sendQuestions()");
        option2.setAttribute("onclick", "correct(); sendQuestions()");
        option3.setAttribute("onclick", "wrong(); sendQuestions()");
        option4.setAttribute("onclick", "wrong(); sendQuestions()");


    } else if (questionPicked === 2) {
        questionAsk.textContent = (question2[0]);
        option1.textContent = (question2[1]);
        option2.textContent = (question2[2]);
        option3.textContent = (question2[3]);
        option4.textContent = (question2[4]);
        option1.setAttribute("onclick", "correct(); sendQuestions()");
        option2.setAttribute("onclick", "wrong(); sendQuestions()");
        option3.setAttribute("onclick", "wrong(); sendQuestions()");
        option4.setAttribute("onclick", "wrong(); sendQuestions()");

    } else if (questionPicked === 3) {
        questionAsk.textContent = (question3[0]);
        option1.textContent = (question3[1]);
        option2.textContent = (question3[2]);
        option3.textContent = (question3[3]);
        option4.textContent = (question3[4]);
        option1.setAttribute("onclick", "correct(); sendQuestions()");
        option2.setAttribute("onclick", "wrong(); sendQuestions()");
        option3.setAttribute("onclick", "wrong(); sendQuestions()");
        option4.setAttribute("onclick", "wrong(); sendQuestions()");

    } else if (questionPicked === 4) {
        questionAsk.textContent = (question4[0]);
        option1.textContent = (question4[1]);
        option2.textContent = (question4[2]);
        option3.textContent = (question4[3]);
        option4.textContent = (question4[4]);
        option1.setAttribute("onclick", "wrong(); sendQuestions()");
        option2.setAttribute("onclick", "wrong(); sendQuestions()");
        option3.setAttribute("onclick", "wrong(); sendQuestions()");
        option4.setAttribute("onclick", "correct(); sendQuestions()");

    } else if (questionPicked === 5) {
        questionAsk.textContent = (question5[0]);
        option1.textContent = (question5[1]);
        option2.textContent = (question5[2]);
        option3.textContent = (question5[3]);
        option4.textContent = (question5[4]);
        option1.setAttribute("onclick", "wrong(); sendQuestions()");
        option2.setAttribute("onclick", "wrong(); sendQuestions()");
        option3.setAttribute("onclick", "correct(); sendQuestions()");
        option4.setAttribute("onclick", "wrong(); sendQuestions()");
    }
}

//styles the buttons and loops them through the quiz
function sendQuestions() {
    questionAsk.setAttribute("class", "question");
    option1.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option2.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option3.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option4.setAttribute("class", "btn btn-primary btn-lg btn-block question");

    option1.setAttribute("onclick", "sendQuestions()");
    option2.setAttribute("onclick", "sendQuestions()");
    option3.setAttribute("onclick", "sendQuestions()");
    option4.setAttribute("onclick", "sendQuestions()");

    document.getElementById("container").prepend(option4);
    document.getElementById("container").prepend(option3);
    document.getElementById("container").prepend(option2);
    document.getElementById("container").prepend(option1);
    document.getElementById("container").prepend(questionAsk);

    ThisQuestion(questions[counter]);
    counter++;
    //exits the quiz after the last question
    if (counter > 5) {
        exitQuiz();
    }
}
//displays the correct text when the correct answer is chosen
function correct() {
    var rightWrong = document.createElement("div");
    rightWrong.setAttribute("id","rightOrWrong");
    document.getElementById("container").append(rightWrong);
    var correctLine = document.createElement("hr");
    var correctStatement = document.createElement("p");
    correctStatement.textContent = "Correct!";
    correctLine.setAttribute("class", "correctLine");
    correctStatement.setAttribute("class", "correctStatement");
    document.getElementById("rightOrWrong").append(correctLine);
    document.getElementById("rightOrWrong").append(correctStatement);

    setTimeout(function () { document.getElementById("rightOrWrong").innerHTML = ""; }, 1000);

}
//displays the wrong text when the wrong answer is chosen as well as subtracting time
function wrong() {
    time -= 15;
    var rightWrong = document.createElement("div");
    rightWrong.setAttribute("id","rightOrWrong");
    document.getElementById("container").append(rightWrong);
    var wrongLine = document.createElement("hr");
    var wrongStatement = document.createElement("p");
    wrongStatement.textContent = "Incorrect!";
    wrongLine.setAttribute("class", "wrongLine");
    wrongStatement.setAttribute("class", "wrongStatement");
    document.getElementById("rightOrWrong").appendChild(wrongLine);
    document.getElementById("rightOrWrong").appendChild(wrongStatement);

    setTimeout(function () { document.getElementById("rightOrWrong").innerHTML = ""; }, 1000);
}
//after answering all the questions or running out of time moves to display score and ask for user's name
function exitQuiz() {
    //lock stops the timer from pushing an alert if time runs out
    lock = true;
    document.getElementById("container").innerHTML = "";
    var finished = document.createElement("h2");
    var enterName = document.createElement("form");
    var createInput = document.createElement("input");
    var createSubmit = document.createElement("input");

    finished.setAttribute("class", "finishedQuiz");
    finished.textContent = "QUIZ FINISHED! Your score was " + (time+1) + "!";
    document.getElementById("container").append(finished);

    createSubmit.setAttribute("type", "submit");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "newName");
    createInput.setAttribute("placeholder", "Enter your initials here!");
    createInput.value = "";

    enterName.setAttribute("class", "enterName")
    enterName.setAttribute("type", "text");

    enterName.appendChild(createInput);
    enterName.appendChild(createSubmit);
    document.getElementById("container").append(enterName);

    //On submission of User's Name goes to high score area
    enterName.addEventListener("submit", function (event) {

        event.preventDefault();

        var nameOfUser = document.getElementById("newName").value;

        listOfNames.push(nameOfUser);
        nameOfUser.value = "";

        listOfScores.push(time);
        time = 0;
        nameOfUser.value = "";

        renderScores();
        storeScores();
    });
}
//dispays the scores
function renderScores() {

    document.getElementById("container").innerHTML = "";
    //resets the highscore list
    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset High Scores";
    resetButton.setAttribute("class", "btn btn-secondary resetButton");
    resetButton.onclick = function () {
        listName.textContent = "";
        document.getElementById("container").append(listName);
        localStorage.clear();
    };
    startButton.setAttribute("class", "btn btn-secondary resetButton");
    startButton.setAttribute("onclick", "start()");
    startButton.textContent = "Restart the Quiz";
    document.getElementById("container").append(startButton);
    document.getElementById("container").append(resetButton);
    
 
    //displays the high scores on the page
    for (var i = 0; i < listOfNames.length; i++) {

        var listName = document.createElement("P");
        listName.setAttribute("class", "listOfNames");
        listName.textContent = listOfNames[i] + " got a score of " + listOfScores[i];

        document.getElementById("container").append(listName);
    }
        
}
//Get's the local storage Names and Scores
function fromStorage() {
    var storedNames = JSON.parse(localStorage.getItem("names"));
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedNames && storedScores) {
        listOfNames = storedNames;
        listOfScores = storedScores;
    }
}
//Puts the name and score into the local storage
function storeScores() {
    localStorage.setItem("names", JSON.stringify(listOfNames));
    localStorage.setItem("scores", JSON.stringify(listOfScores));
}
var startButton = document.createElement("button");
var makeChoice = document.getElementById("container");
var questionAsk = document.createElement("h2");
var highScore = document.getElementById("high-score");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
var counter = 0;
var nameOfUser = "";

var score = 0;
var questions = [];
var listOfNames = [];
var listOfScores = [];
console.log(listOfNames.length);

highScore.onclick = function() {
    exitQuiz();
}

startButton.setAttribute("class", "btn btn-primary btn-lg btn-block");
startButton.setAttribute("style", "width: 80%;margin: 0 10% 10px 10%");
startButton.textContent = "Start The Quiz, REMEMBER You only have 60 seconds";

document.getElementById("container").append(startButton);

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
    "A global variable is only usable in certain areas while a global variable is usable everywhere",
    "local variables are outside of functions while global variables are inside of functions",
    "a global variable appears before all other scripts so it can be accessed anywhere while local variables are not"
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

startButton.onclick = function () { timer(); whichQuestion(); sendQuestions() };

function timer() {
    startButton.parentNode.removeChild(startButton);

    var time = 59;
    var timeLeft = document.getElementById("timer");
    myTimer = setInterval(function () {
        if (time < 0) {
            alert("TIME'S UP");
            clearInterval(myTimer);
            exitQuiz();
        } else {
            timeLeft.innerHTML = time;
            time--;
        }
    }, 1000);
}

function ThisQuestion(questionPicked) {

    questionPicked = parseInt(questionPicked);

    if (questionPicked === 1) {
        questionAsk.textContent = (question1[0]);
        option1.textContent = (question1[1]);
        option2.textContent = (question1[2]);
        option3.textContent = (question1[3]);
        option4.textContent = (question1[4]);
        option2.value = "correct";
        

    } else if (questionPicked === 2) {
        questionAsk.textContent = (question2[0]);
        option1.textContent = (question2[1]);
        option2.textContent = (question2[2]);
        option3.textContent = (question2[3]);
        option4.textContent = (question2[4]);
        option1.value = "correct";
     
    } else if (questionPicked === 3) {
        questionAsk.textContent = (question3[0]);
        option1.textContent = (question3[1]);
        option2.textContent = (question3[2]);
        option3.textContent = (question3[3]);
        option4.textContent = (question3[4]);
        option3.value = "correct";
      
    } else if (questionPicked === 4) {
        questionAsk.textContent = (question4[0]);
        option1.textContent = (question4[1]);
        option2.textContent = (question4[2]);
        option3.textContent = (question4[3]);
        option4.textContent = (question4[4]);
        option3.value = "correct";
    
    } else if (questionPicked === 5) {
        questionAsk.textContent = (question5[0]);
        option1.textContent = (question5[1]);
        option2.textContent = (question5[2]);
        option3.textContent = (question5[3]);
        option4.textContent = (question5[4]);
        option4.value = "correct";
    }

}

//Figures out which code to question to push to buttons
function sendQuestions() {
    option1.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option2.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option3.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    option4.setAttribute("class", "btn btn-primary btn-lg btn-block question");
    
    option1.setAttribute("onclick", "sendQuestions()");
    option2.setAttribute("onclick", "sendQuestions()");
    option3.setAttribute("onclick", "sendQuestions()");
    option4.setAttribute("onclick", "sendQuestions()");

    document.getElementById("inside").append(questionAsk);
    document.getElementById("inside").append(option1);
    document.getElementById("inside").append(option2);
    document.getElementById("inside").append(option3);
    document.getElementById("inside").append(option4);
    
    ThisQuestion(questions[counter]);
    counter++;
    console.log(counter);

    if (counter > 5) {
        exitQuiz();
    }
  }

function exitQuiz() {
    document.body.innerHTML = "";
    var finished = document.createElement("h2");
    var enterName = document.createElement("form");
    var createInput = document.createElement("input");
    var createSubmit = document.createElement("input");
    

    finished.setAttribute("class","finishedQuiz")
    finished.textContent = "QUIZ FINISHED! Your score was " + score + "!";
    document.body.append(finished);
  
    createSubmit.setAttribute("type","submit");
    createInput.setAttribute("type","text");
    createInput.setAttribute("id","newName");
    createInput.setAttribute("placeholder","Enter your initials here!");
    createInput.value = "";

    enterName.setAttribute("class","enterName")
    enterName.setAttribute("type","text");
    
    enterName.appendChild(createInput);
    enterName.appendChild(createSubmit);
    document.body.append(enterName);
    
    fromStorage();

    //On submission of User's Name
    enterName.addEventListener("submit", function(event) {
    event.preventDefault();

    var nameOfUser = document.getElementById("newName").value;

    listOfNames.push(nameOfUser);
    nameOfUser.value = "";
    listOfScores.push(score);
    score = 0;
    nameOfUser.value = "";

    storeScores();
    renderScores();

    });
}

function renderScores() {
    //document.body.innerHTML = "";

    for (var i = 0; i<listOfNames.length;i++) {
        console.log(listOfNames.length);
        var listName = document.createElement("li");
        listName.setAttribute("class","listOfNames");
        listName.textContent = "The user " + listOfNames[i] + " got a score of " + listOfScores[i];

        document.body.append(listName);
    }
}

function fromStorage() {

    var storedNames = JSON.parse(localStorage.getItem("names"));
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedNames && storedScores) {
        listOfNames = storedNames;
        listOfScores = storedScores;
    }

    renderScores();

}

function storeScores() {
    localStorage.setItem("names", JSON.stringify(listOfNames));
    localStorage.setItem("scores", JSON.stringify(listOfScores));
}
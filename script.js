var startButton = document.createElement("button");
var timeLeft = document.createElement("p");
startButton.textContent = "Start The Quiz, REMEMBER You only have 60 seconds";

document.body.append(startButton);

startButton.setAttribute("class","btn btn-primary btn-lg btn-block");
startButton.setAttribute("style","width: 60%;margin: 0 0 5px 5px");

startButton.onclick = function() {timer()};

function timer() {

    document.body.append(timeLeft);
    var time = 5;
    myTimer = setInterval(function() {
        if(time < 0) {
            var finished = document.createElement("p");
            finished.textContent = "TIME'S UP";
            document.body.append(finished);
            clearInterval(myTimer);
        } else {
        timeLeft.textContent = "You have " + time;
        time --;
        }
    }, 1000);
}














var questions = [];

// //List of Questions that can appear on the quiz
var question1 = [
    "If I want to conver the string 1.325 to a number what should I use?",
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

//Creates buttons, styles buttons and pushes content to buttons
function ThisQuestion(questionPicked) {
    questionPicked = parseInt(questionPicked);

    var questionAsk = document.createElement("h2");
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button"); 

    option1.setAttribute("class","btn btn-primary btn-lg btn-block");
    option1.setAttribute("style","width: 60%;margin: 0 0 5px 5px");
    option2.setAttribute("class","btn btn-primary btn-lg btn-block");
    option2.setAttribute("style","width: 60%;margin: 0 0 5px 5px");
    option3.setAttribute("class","btn btn-primary btn-lg btn-block");
    option3.setAttribute("style","width: 60%;margin: 0 0 5px 5px");
    option4.setAttribute("class","btn btn-primary btn-lg btn-block");
    option4.setAttribute("style","width: 60%;margin: 0 0 5px 5px");

    if (questionPicked === 1) {

        questionAsk.textContent = (question1[0]);
        option1.textContent = (question1[1]);
        option2.textContent = (question1[2]);
        option3.textContent = (question1[3]);
        option4.textContent = (question1[4]);

    } else  if (questionPicked === 2) {

        questionAsk.textContent = (question2[0]);
        option1.textContent = (question2[1]);
        option2.textContent = (question2[2]);
        option3.textContent = (question2[3]);
        option4.textContent = (question2[4]);

    } else  if (questionPicked === 3) {

        questionAsk.textContent = (question3[0]);
        option1.textContent = (question3[1]);
        option2.textContent = (question3[2]);
        option3.textContent = (question3[3]);
        option4.textContent = (question3[4]);

    } else  if (questionPicked === 4) {

        questionAsk.textContent = (question4[0]);
        option1.textContent = (question4[1]);
        option2.textContent = (question4[2]);
        option3.textContent = (question4[3]);
        option4.textContent = (question4[4]);

    } else if (questionPicked === 5) {

        questionAsk.textContent = (question5[0]);
        option1.textContent = (question5[1]);
        option2.textContent = (question5[2]);
        option3.textContent = (question5[3]);
        option4.textContent = (question5[4]);
    }

    document.body.append(questionAsk);
    document.body.append(option1);
    document.body.append(option2);
    document.body.append(option3);
    document.body.append(option4);
} 

    var questionOrder = [1,2,3,4,5];

//Randomly Selects the question to use
function whichQuestion() {
while (questionOrder.length > 0) {
    var index = Math.floor(Math.random() * (questionOrder.length));
    // console.log(index);
    var chosenQuestion = questionOrder[index];
    questions.push(chosenQuestion);
    questionOrder.splice(index,1);
    }
}

whichQuestion();

//Figures out which code to question to push to buttons
for (var i = 0; i < questions.length; i++)
{
    if (questions[i] === 1) {
        ThisQuestion(questions[i]);
    }
    else if (questions[i] === 2) {
        ThisQuestion(questions[i]);
    }
    else if (questions[i] === 3) {
        ThisQuestion(questions[i]);
    }
    else if (questions[i] === 4) {
        ThisQuestion(questions[i]);
    }
    else if (questions[i] === 5) {
        ThisQuestion(questions[i]);
    }
}

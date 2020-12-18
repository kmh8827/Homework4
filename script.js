// //List of Questions that can appear on the quiz
var questions = [];

var questionList = {
    question1 : {
    question: "If I want to conver the string 1.325 to a number what should I use?",
    option1: "ParseInt()",
    option2: "ParseFloat()",
    option3: "String.push()",
    option4: "JSON.stringify()"
},
    question2 : {
    question : "What will the array.length(fruits) return given fruits[“apple”,”banana”,”orange”,”pear”];?",
    option1 : "4",
    option2 : "3",
    option3 : "5",
    option4 : "1"
},
    question3 : {
    question : "What will array.push(“pumpkin”) do to the array vegetables[“potato”];?",
    option1 : "['potato','pumpkin'];",
    option2 : "['potato pumpkin'];",
    option3 : "['pumpkin','potato']",
    option4 : "['pumpkin potato']"
},
    question4 : {
    question : "What is the difference between a global variable and a local variable in Javascript?",
    option1 : "A global variable always has the same value",
    option2 : "A global variable is only usable in certain areas while a global variable is usable everywhere",
    option3 : "local variables are outside of functions while global variables are inside of functions",
    option4 : "a global variable appears before all other scripts so it can be accessed anywhere while local variables are not"
},
    question5 : {
    question : "What is the appropriate way to generate a random number between 0 and 5",
    option1 : "Math.floor(Math.random()) * 5",
    option2 : "math.floor(math.random()) * 6",
    option3 : "Math.floor(Math.random()) * 6",
    option4 : "Math.ceiling(Math.random()) * 6"
}
};

var questionAsk = document.createElement("p");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

//Randomly Select the question
function whichQuestion() {

    var questionOrder = [1,2,3,4,5];

while (questionOrder.length > 0) {
    var index = Math.floor(Math.random() * (questionOrder.length));
    console.log(index);
    var chosenQuestion = questionOrder[index];
    questions.push(chosenQuestion);
    questionOrder.splice(index,1);
    }
}


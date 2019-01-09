// Trivia Game

// Set variables
var timer = 60;
var clockRunning = true;
var QuestionArray;
var question;
var choices;
var answer1;
var answer2;
var answer3;
var answer4;
var correctAnswer;
var userGuess;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;
var intervalId;




// Set an array to display questions

// Question 1

var QuestionArray = [{

    question: "In the movie A Christmas Story, what was the punishment Ralphie got from his mom when he said a bad word?",

    // Answer Choices
    choices: {
        answer1: "a. A spanking with his dad's belt",
        answer2: "b. Soap in his mouth",
        answer3: "c. Sent to bed without dinner or dessert",
        answer4: "d. Extra chores",
    },
    // Correct answer
    correctAnswer: "Soap in his mouth",


},

// Question 2
{
    question: "In the movie Christmas Vacation, what did Clark get for his Chritmas bonus?",

    // Answer choices
    choices: {
        answer1: "a. Nothing",
        answer2: "b. Meat of the month membership",
        answer3: "c. Jelly of the month membership",
        answer4: "d. A thousand dollars",
    },
    // Correct answer
    correctAnswer: "Jelly of the month membership",


},

// Question 3
{

    question: "In the movie Elf, Which animal did Buddy NOT see when leaving the north pole to visit his dad?",

    // Answer choices
    choices: {
        answer1: "a. Narwhal",
        answer2: "b. Arctic Puffin",
        answer3: "c. Reindeer",
        answer4: "d. Polar bear",
    },
    // Correct answer
    correctAnswer: "Reindeer",



},

// Question 4
{
    question: "In the movie How the Grinch Stole Christmas, what does Cindy-Lou Who invite Grinch to be at the Whobilation?",

    // Answer choices
    choices: {
        answer1: "a. Whobilee",
        answer2: "b. Holiday Cheermeister",
        answer3: "c. Mayor of Whoville",
        answer4: "d. Fah Who Foraze",
    },
    // Correct answer
    correctAnswer: "Holiday Cheermeister",


},

// Quesetion 5
{
    question: "In the movie Home Alone 2, what is the name of the hotel Kevin stayed in in NYC in Home Alone 2?",

    // Answer choices
    choices: {
        answer1: "a. The Plaza",
        answer2: "b. Trump tower",
        answer3: "c. The W Hotel",
        answer4: "d. The Knickerbocker Hotel",
    },
    // Correct answer
    correctAnswer: "The Plaza",


},

// Question 6
{
    question: "In the movie Prancer, Where does Jessica first find Prancer?",

    // Answer choices
    choices: {
        answer1: "a. In the barn",
        answer2: "b. In the woods",
        answer3: "c. In the apple orchard",
        answer4: "d. In the kitchen",
    },
    // Correct answer
    correctAnswer: "In the woods",


},

// Question 7
{
    question: "In the movie The Santa Clause, What was Tim Allen's character's name before he became Santa?",

    // Answer choices
    choices: {
        answer1: "a. Scott Calvin",
        answer2: "b. Tim Taylor",
        answer3: "c. Shaun Clark",
        answer4: "d. Clark Griswold",
    },
    // Correct answer
    correctAnswer: "Scott Calvin",


},

// Question 8
{
    question: "In the movie White Christmas, What is the gift that Betty gives Bob at the end of the movie?",

    // Answer choices
    choices: {
        answer1: "a. A scarf",
        answer2: "b. A pair of gloves",
        answer3: "c. A figurine of a knight on horseback",
        answer4: "d. She doesn't give him anything.",
    },
    // Correct answer
    correctAnswer: "A figurine of a knight on horseback",


}];
// Displays questions once start button is clicked
$("#startButton").click(function () {
    $(document).ready(function startGame() {
        for (var i = 0; i < QuestionArray.length; i++) {
            $("#trivia").append(QuestionArray[i].question + "<br>");
            $("#trivia").append("<input type='radio' name=' " + i + "'value='answer1'> " + QuestionArray[i].choices.answer1 + "<br>");
            $("#trivia").append("<input type='radio' name=' " + i + "'value='answer2'> " + QuestionArray[i].choices.answer2 + "<br>");
            $("#trivia").append("<input type='radio' name=' " + i + "'value='answer3'> " + QuestionArray[i].choices.answer3 + "<br>");
            $("#trivia").append("<input type='radio' name=' " + i + "'value='answer4'> " + QuestionArray[i].choices.answer4 + "<br>");
            $("#startButton").hide();




            function submit() {
                if (userGuess !== correctAnswer) {
                    incorrectAnswers++;
                    $("#incorrect").text("Incorrect: " + incorrectAnswers);
                } else if (userGuess === correctAnswer) {
                    correctAnswers++;
                    $("#correct").text("Correct: " + correctAnswers);
                }
            }

        }
    });


});
$(document).ready(function startTimer() {
    var timing;
    var myTimer;

    timing = 60;
    $("#timing").html(timing);
    $("#begin").prop("disabled", true);
    myTimer = setInterval(function () {
        timing--;
        $("#timing").html(timing);
        if (timing === 0) {
            alert("Time's up!")
            clearInterval(myTimer);
            $("#begin").prop("disabled", false);
        }
    }, 1000);
})
// Trivia Game

// Set variables
var image1 = ["assets/images/AChristmasStory.webp"];
var image2 = ["assets/images/ChristmasVacation.webp"];
var image3 = ["assets/images/elf.webp"];
var image4 = ["assets/images/grinch.webp"];
var image5 = ["assets/images/HomeAlone2"];
var image6 = ["assets/images/prancer.webp"];
var image7 = ["assets/images/TheSantaClause.webp"];
var image8 = ["assets/images/WhiteChristmas.webp"];

var showImage;

var count = 0;

var timer;

var QuestionArray = [{
    question: "What was the punishment Ralphie got from his mom when he said a bad word?",
    answer1: "a. A spanking with his dad's belt",
    answer2: "b. Soap in his mouth",
    answer3: "c. Sent to bed without dinner or dessert",
    answer4: "d. Extra chores",
    correctAnswer: "Soap in his mouth",
    image: image1
}]

$("#Results").hide();

// First slide 
// Start button
$("#startButton").click(function () {
    
    $("#question").text(QuestionArray[0].question);
    $("#answer1").text(QuestionArray[0].answer1);
    $("#answer2").text(QuestionArray[0].answer2);
    $("#answer3").text(QuestionArray[0].answer3);
    $("#answer4").text(QuestionArray[0].answer4);
});

$(".answer").click(function () {
    $("#startButton").hide();
    $("#QuestionAnswer").hide();
    // Show results
    $("#Results").show();
    $("#image-holder").html(`<img src=${QuestionArray[count].image}>`)
});




// Second slide with first question

    // Counter counting down upon page load
    // Answer choices
    // Registers user's click/choice

// Third slide indicating right or wrong answer
    // GIF on answer page

// Fourth slide with first question
    // Counter counting down upon page load
    // Answer choices
    // Registers user's click/choice

// Fifth slide indicating right or wrong answer
    // GIF on answer page


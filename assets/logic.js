var randomNumber = 0;
var userScore = 0;
var red = 0;
var blue = 0;
var green = 0;
var purple = 0;
var wins = 0;
var losses = 0;

function generateRand(n){
    var i = Math.floor(Math.random() * n);
    return(i);
};

function startGame(){
    randomNumber = 0;
    userScore = 0;
    red = generateRand(12);
    blue = generateRand(12);
    green = generateRand(12);
    purple = generateRand(12);
    randomNumber = generateRand(50);
    $("#red-value").text("?");
    $("#blue-value").text("?");
    $("#green-value").text("?");
    $("#purple-value").text("?");
    $("#random-number").text(randomNumber);
    $("#user-score").text(userScore);
    $("#random-button").attr("disabled", "true")
    $("#game-state").text("Play!");
    console.log("The Gem Values are | Red: " + red  + " | Blue: " + blue + " | Green: " + green + " | Purple: " + purple);
    console.log("The random number is: " + randomNumber);
}

function checkState() {
    if (userScore == randomNumber) {
        $("#game-state").text("You Win!");
        wins++
        $("#wins").text(wins);
        $("#random-button").removeAttr("disabled")
    } else if (userScore > randomNumber) {
        $("#game-state").text("You Lose!");
        losses++
        $("#losses").text(losses);
        $("#random-button").removeAttr("disabled")
    };
};

$( document ).ready(function() {
    startGame();
});

$("#red").on("click", function(){
    console.log("The Red Gem is: " + red)
    userScore = userScore + red;
    console.log("The User Score is: " + userScore);
    $("#user-score").text(userScore);
    $("#red-value").text(red);
    checkState();
})

$("#blue").on("click", function(){
    console.log("The Blue Gem is: " + blue)
    userScore = userScore + blue;
    console.log("The User Score is: " + userScore);
    $("#user-score").text(userScore);
    $("#blue-value").text(blue);
    checkState();
})

$("#green").on("click", function(){
    console.log("The green Gem is: " + green)
    userScore = userScore + green;
    console.log("The User Score is: " + userScore);
    $("#user-score").text(userScore);
    $("#green-value").text(green);
    checkState();
})

$("#purple").on("click", function(){
    console.log("The purple Gem is: " + purple)
    userScore = userScore + purple;
    console.log("The User Score is: " + userScore);
    $("#user-score").text(userScore);
    $("#purple-value").text(purple);
    checkState();
});

$("#random-button").on("click", function(){
    startGame();
})

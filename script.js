/* Module 5 Project Script File */
$(document).ready(function(){
    var score = 0;
    $("#score").text("Score: $"+score);
    
    function updateScore(value){
        score = score + value;
        $("#score").text("Score: $"+score);
    }
    
    function incorrectAnswer(){
        window.alert("Sorry, Incorrect");
    }
    
    $("#shinnoh100false").click(function(){
        updateScore(100)});
    $("#shinnoh100true").click(function(){
        incorrectAnswer()});
    $("#shinnoh200false").click(function(){
        updateScore(200)});
    $("#shinnoh200true").click(function(){
        incorrectAnswer()});
    $("#shinnoh300false").click(function(){updateScore(300)});
    $("#shinnoh300true").click(function(){incorrectAnswer()});
    
    $("#unova100false").click(function(){updateScore(100)});
    $("#unova100true").click(function(){incorrectAnswer()});
    $("#unova200false").click(function(){updateScore(200)});
    $("#unova200true").click(function(){incorrectAnswer()});
    $("#unova300false").click(function(){updateScore(300)});
    $("#unova300true").click(function(){incorrectAnswer()});
    
    $("#alola100false").click(function(){updateScore(100)});
    $("#alola100true").click(function(){incorrectAnswer()});
    $("#alola200false").click(function(){updateScore(200)});
    $("#alola200true").click(function(){incorrectAnswer()});
    $("#alola300false").click(function(){updateScore(300)});
    $("#alola300true").click(function(){incorrectAnswer()});


});
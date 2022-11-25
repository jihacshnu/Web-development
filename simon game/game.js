
var buttoncolor=["red", "blue", "green", "yellow"];
gamepattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level "+level);
        nextsequnce();
        started=true;
    }

});

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
if (gamepattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("Success");

    if (userClickedPattern.length===gamepattern.length){
        setTimeout(function(){
            nextsequnce();
        },1000);
    }
} else{
    console.log("Wrong sequence!");
    playSound("wrong sequence!");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game over, Press any key to Restart");
    startOver();
} 

}

function nextsequnce() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var ranno=Math.floor(Math.random()*4);
    var randomchosencolor= buttoncolor[ranno];
    gamepattern.push(randomchosencolor)
    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomchosencolor);
};


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}
function startOver() {
    level=0;
    gamepattern=[];
    started=false;
}
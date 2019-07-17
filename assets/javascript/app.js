document.ready

//========================================GLOBAL VARIABLES=====================
var score = 0

 //objects with keys as answers
var questions = [{
    question:  "how much wood could a woodchuck chuck?",
    imgSrc:  "",
    A:  "32 trees worth",
    B:  "about as much wood a woodchuck could",
    C:  "woodchucks are extinct",
    D:  "not as much as a lumber jack"
    },{
    question2:  "how any times have crewed space shuttles landed on the moon?",
    imgSrc:  "",
    A:  "never. unless you count in Hollywood",
    B:  "1 time",
    C:  "6 times",
    D:  "2 times",
    E:  "the earth is flat"
    }
];


timeLeft = 5

//============================FUNCTIONS=========================================

//---render questions function----
function renderQuestions() {
    var q = questions [];

//-------TIMER----------
function countDown () {
    var timer = setInterval(function(){
            timeLeft -- 
            $('#timer').text(timeLeft)
        if (timeLeft == -1 ) {
            $('#timer').html("gotta be faster than that!");
            clearInterval(timer)
        }
        },  1000)
    }


function gameStart () {
    $('#directions, #start').css('display', 'none')

}

//======================ON CLICK START GAME=====================================

$('button').click(function(){
    gameStart();
    countDown();
});



// loop through questions
for (var i =0; i < questions.length; i++) {
    var response = //on click selection object--- key
    if (response === questions[i].answer){
        score++
    }}

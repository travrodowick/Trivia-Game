$(document).ready(function () {

    //========================================GLOBAL VARIABLES=====================
    var score = 0
    timeLeft = 5


    //objects with keys as answers
    var questions = [{
        question: "how much wood could a woodchuck chuck?",
        imgSrc: "",
        answers: ["32 trees worth", "about as much wood a woodchuck could", "woodchucks are extinct", "not as much as a lumber jack"],
        correct: "about as much wood a woodchuck could"
    }, {
        question: "how any times have crewed space shuttles landed on the moon?",
        imgSrc: "",
        answers: ["never. unless you count in Hollywood", "1 time", "2 times", "6 times", "the earth is flat"],
        correct: '6 times'
    }, {
        question: "whats the answer to question 3?",
        imgSrc: "",
        answers: ["A...first choice", "B", "C is the answer most of the time", "unless D is the answer and C's just there to trick you"],
        correct: "C is the answer most of the time"
    }];




    //============================FUNCTIONS=========================================





    function renderQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $('#questions').text("heres questions:  ", questions[i].question)
            for (var j = 0; j < questions[i].answers.length; j++) {

                $('#answers').text(questions[i].answers[j])
            }
        }
    }
    //-------TIMER----------
    function countDown() {
        var timer = setInterval(function () {
            timeLeft--
            $('#timer').text(timeLeft)
            if (timeLeft == -1) {
                $('#timer').html("gotta be faster than that!");
                clearInterval(timer)
            }
        }, 1000)
    }


    function gameStart() {
        $('#directions, #start').css('display', 'none')

    }




    //=======================TESTING & DEBUGGING====================

    renderQuestions()



    //======================ON CLICK START GAME=====================================

    $('button').click(function () {
        gameStart();
        countDown();
        renderQuestions();
    });



    // loop through questions
    // for (var i =0; i < questions.length; i++) {
    //     var response = //on click selection object--- key
    //     } else if (response === questions[i].answer){
    //         score++
    //     }
})
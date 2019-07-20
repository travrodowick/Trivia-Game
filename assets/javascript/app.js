$(document).ready(function () {

    //========================================GLOBAL VARIABLES=====================
    var score = 0;
    var timeLeft = 600;
    var newQuestion = '';
    var choices




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
        correct: 2
    }, {
        question: "whats the answer to question 3?",
        imgSrc: "",
        answers: ["A...first choice", "B", "C is the answer most of the time", "unless D is the answer and C's just there to trick you"],
        correct: 2
    },
    {
        question: "whats the name of the of the first person to set foot on the moon?",
        imgSrc: "",
        answers: ["Britney Bitch", "Buzz Aldrin", "Neil Armstrong", "Brad Pitt"],
        correct: 2
    },
    {
        question: "who was president during the first moon landing?",
        imgSrc: "",
        answers: ["John F. Kennedy", "Lyndon B. Johnson", "Britney Bitch", "William B. Pitt"],
        correct: 0
    },
    {
        question: "what Apollo mission made the piloted by Aldrin and Armstrong landed on the moon?",
        imgSrc: "",
        answers: ["Apollo 11", "Apollo 13", "Falcon 9", "Apollo 15"],
        correct: 0
    },
    {
        question: "what year was the first moon landing?",
        imgSrc: "",
        answers: ["1975", "1966", "1969", "1973"],
        correct: 2
    }
    ];




    //============================FUNCTIONS=========================================\

    function renderQuestions(question) {
        for (var i = 0; i < questions.length; i++) {
            newQuestion = '<p>' + questions[i] + '</p>';
            // $('#questions').html(newQuestion)
            console.log(questions[i]);
            function renderAnswers(answer) {
                for (var j = 0; j < questions[i].answers.length; j++) {
                    var choices = $('<input type="radio" name= "answer" value= "' + questions[i].answers[j] + '">"');
                    // $("<input type='radio'/>").text(questions[i].answers[j])('<br>');
                    // $('#answerID').append(choices);
                    choices += answer + '<br>'
                    console.log(choices);
                };
            };
        };
        $('buttons').html(choices)
    };



    // function renderQuestions() {
    //     for (var i = 0; i < questions.length; i++) {
    //         var choices = $("<input type='radio'/>").addClass('.answerClass').text('*' + questions.answers[i]);
    //         console.log(choices)
    //     }
    // }

    $('.answerClass').on('click', function () {
        var userGuess = questions.answers
        if (userGuess === questions[i].correct) {
            alert('correct')

        };
    });


    // //render question 1 
    // function renderQuestion1() {
    //     $('#questions').text('Question:  ' + questions.question)
    //     for (var j = 0; j < questions[i].answers.length; j++) {
    //         var choices = $("<p id='answer1'>").text('*' + questions[i].answers[j]);
    //         $('#answerID').append(choices);
    //     };
    // }



    // //render questions to the page---

    //     console.log('renderQuestions run')
    // };
    //-------TIMER----------
    function countDown() {
        var timer = setInterval(function () {
            timeLeft--;
            $('#timer').text(timeLeft);
            if (timeLeft == -1) {
                $('#timer').html("gotta be faster than that!");
                clearInterval(timer);
            };
        }, 1000);
    };


    function gameStart() {
        $('#directions, #start').css('display', 'none')
    }







    //========ON CLICK START GAME======
    $('button').on('click', function () {
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
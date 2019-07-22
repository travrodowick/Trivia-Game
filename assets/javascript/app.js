$(document).ready(function () {

    //========================================GLOBAL VARIABLES=====================
    var score = 0;
    var timeLeft = 600;
    var newQuestion = '';
    var choices


    //objects with keys as answers
    var questions = [
        {
            question: "#1:  on a scale of 1-5 -- 1 being no moon landing-- 5 being im on the moon right now --- have we landed on the moon? ",
            imgSrc: "",
            answers: ["1", "2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "#2:  how any times have crewed space shuttles landed on the moon?",
            imgSrc: "",
            answers: ["never. unless you count in Hollywood", "1 time", "2 times", "6 times", "the earth is flat"],
            correct: 3
        },
        {
            question: "#3:  what nation made the first object to touch the moon?",
            imgSrc: "",
            answers: ["USA! USA! USA!", "Soviet Union", "North Korea", "Kyrgyzstan"],
            correct: 0
        },
        {
            question: "#4:  whats the name of the of the first person to set foot on the moon?",
            imgSrc: "",
            answers: ["Britney Bitch", "Buzz Aldrin", "Neil Armstrong", "Brad Pitt"],
            correct: 2
        },
        {
            question: "#5:  who was president during the first moon landing?",
            imgSrc: "",
            answers: ["John F. Kennedy", "Lyndon B. Johnson", "Britney Bitch", "William B. Pitt"],
            correct: 0
        },
        {
            question: "#6:  what Apollo mission made the piloted by Aldrin and Armstrong landed on the moon?",
            imgSrc: "",
            answers: ["Apollo 11", "Apollo 13", "Falcon 9", "Apollo 15"],
            correct: 0
        },
        {
            question: "#7:  what year was the first moon landing?",
            imgSrc: "",
            answers: ["1975", "1966", "1969", "1973"],
            correct: 2
        }
    ];




    //============================FUNCTIONS=========================================\
    function renderQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $('#quiz').append('<br>' + questions[i].question + '<br>');
            console.log(questions[i]);
            for (var j = 0; j < questions[i].answers.length; j++) {
                console.log(questions[i].answers[j]);
                var choices = $(`<input type='radio' name= 'question-${i}' value='${questions[i].answers[j]}'><label for= '${questions[i].answers[j]}'>${questions[i].answers[j]}</label>`);
                $('#quiz').append(choices);
            };
        };
    };
    //render submit form button
    function submitButton() {
        var submitButton = $(`<button type= "button" id="submit-bttn">SUBMIT</button>`);
        $('#submit').append(submitButton);
    };
    //onclick check answer function
    $('.answerClass').on('click', function () {
        var userGuess = questions.answers;
        if (userGuess === questions[i].correct) {
            alert('correct');
        };
    });

    //-------TIMER----------
    //initiate contdown and display message on timeout and remove quiz
    function countDown() {
        var timer = setInterval(function () {
            timeLeft--;
            $('#timer').text(timeLeft);
            if (timeLeft == -1) {
                $('#timer').html("gotta be faster than that! 0/0:  you get an F for speed!");
                clearInterval(timer);
                $('#quiz, #submit').css('display', 'none')
            };
        }, 1000);
    };

    //to remove starting directions and game start button 
    function gameStart() {
        $('#directions, #start').css('display', 'none');
    }

    //========ON CLICK START GAME======
    $('button').on('click', function () {
        gameStart();
        countDown();
        renderQuestions();
        submitButton();
    });

    //==========on click submit questions and check against answers===============
    // loop through questions
    $('#submit').on('click', function () {
        var radios = form.elements["question-0"]
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) { // radio checked?
                var val = radios[i].value
            };
            return val
            // for (var i = 0; i < questions.length; i++) {
            //     // for (var j = 0; j < questions[i].answers.length; j++) {
            //     var response = $("input [name='question-" + i + "']:checked").val();
            //     console.log(response)
        };
        console.log(val)
    });

    // var response = 
    // } if (response === questions[i].answer){
    //     score++
    // }
});
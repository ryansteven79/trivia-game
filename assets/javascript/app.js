$(document).ready(function () {

    var trivia = [{
            "question": "Ken Griffey Jr made his major league debut on April 3, 1989 with what team?",
            "answer": "Seattle Mariners",
            "choiceOne": "Chicago White Sox",
            "choiceTwo": "Texas Rangers",
            "choiceThree": "Cincinnati Reds",
            "choiceFour": "Seattle Mariners",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Griffey.0.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What position did Derek Jeter usually play?",
            "answer": "Shortstop",
            "choiceOne": "Third Base",
            "choiceTwo": "Shortstop",
            "choiceThree": "Second Base",
            "choiceFour": "Left Field",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Jeter.webp' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What team did Jackie Robinson play for?",
            "answer": "Brooklyn Dodgers",
            "choiceOne": "Brooklyn Dodgers",
            "choiceTwo": "New York Yankees",
            "choiceThree": "Boston Red Sox",
            "choiceFour": "Cleveland Indians",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Robinson.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What team was Hank Aaron playing for when he hit his 715th career home run?",
            "answer": "Atlanta Braves",
            "choiceOne": "New York Yankees",
            "choiceTwo": "Atlanta Braves",
            "choiceThree": "Milwaukee Braves",
            "choiceFour": "San Francisco Giants",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Aaron.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "Who was nicknamed \"The Iron Horse\"?",
            "answer": "Lou Gehrig",
            "choiceOne": "Pete Rose",
            "choiceTwo": "Lou Gehrig",
            "choiceThree": "Cal Ripken Jr",
            "choiceFour": "Joe DiMaggio",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Gehrig.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What pitcher has struck out the most batters in his career?",
            "answer": "Nolan Ryan",
            "choiceOne": "Nolan Ryan",
            "choiceTwo": "Roger Clemens",
            "choiceThree": "Randy Johnson",
            "choiceFour": "Cy Young",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Ryan.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What year did Mark McGwire hit 70 home runs?",
            "answer": "1998",
            "choiceOne": "1999",
            "choiceTwo": "2001",
            "choiceThree": "1998",
            "choiceFour": "1997",
            "userGuess": [],
            "correctImage": "<img src='assets/images/McGwire.jpeg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "Who was the first player to hit 30 home runs in a season?",
            "answer": "Babe Ruth",
            "choiceOne": "Ted Williams",
            "choiceTwo": "Honus Wagner",
            "choiceThree": "Babe Ruth",
            "choiceFour": "Ty Cobb",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Ruth.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "Who was the only player to pinch hit for Ted Williams?",
            "answer": "Carroll Hardy",
            "choiceOne": "Shaun McDonald",
            "choiceTwo": "Ted Williams was never pulled for a pinch hit",
            "choiceThree": "Joey Belle",
            "choiceFour": "Carroll Hardy",
            "userGuess": [],
            "correctImage": "<img src='assets/images/Williams.jpg' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        },

        {
            "question": "What is Fred McGriffs nickname?",
            "answer": "Crime Dog",
            "choiceOne": "Dr. Griff",
            "choiceTwo": "Crime Dog",
            "choiceThree": "Prime Time",
            "choiceFour": "The Eliminator",
            "userGuess": [],
            "correctImage": "<img src='assets/images/McGriff.webp' class='img-fluid' style='height:400px;' alt='Responsive image'>",
        }
    ];
    var userSelected;
    var correctAnswer;
    var i = 0;
    var wins = 0;
    var losses = 0;
    var time = 10;

    $("#start").on("click", function () {
        startGame();
        $("#start").hide();
    })

    function startGame() {
        displayQuestion(i);
        addValues(i);
        addBtnText(i);
        sendValues(i);
        startTimer();
    }

    function updateScore() {
        $("#Wins").html(wins);
        $("#Losses").html(losses);
    }

    function displayQuestion(i) {
        $("#question-pad").html("<b>Question: </b>" + trivia[i].question);
        $("#answers").append("<button id='q1' type=/button' value='' class='btn btn-primary m-3'></button>");
        $("#answers").append("<button id='q2' type=/button' value='' class='btn btn-primary m-3'></button>");
        $("#answers").append("<button id='q3' type=/button' value='' class='btn btn-primary m-3'></button>");
        $("#answers").append("<button id='q4' type=/button' value='' class='btn btn-primary m-3'></button>");
    }

    function addValues(i) {
        $("#q1").val(trivia[i].choiceOne)
        $("#q2").val(trivia[i].choiceTwo)
        $("#q3").val(trivia[i].choiceThree)
        $("#q4").val(trivia[i].choiceFour)
    }

    function addBtnText(i) {
        $("#q1").text(trivia[i].choiceOne)
        $("#q2").text(trivia[i].choiceTwo)
        $("#q3").text(trivia[i].choiceThree)
        $("#q4").text(trivia[i].choiceFour)
    }

    function sendValues(i) {
        $("button").click(function () {
            userSelected = $(this).val();
            trivia[i].userGuess = userSelected;
            checker(i);
            stopTimer();
        })
    }

    function checker(i) {
        correctAnswer = trivia[i].answer;
        if (userSelected == correctAnswer) {
            $("#answers").empty();
            $("#answers").html("<h4 class='text-success'>Correct. " + correctAnswer + "</h4>");
            $("#result").html(trivia[i].correctImage);
            wins++;
            setTimeout(nextQuestion, 3000)
        } else {
            $("#answers").empty();
            $("#answers").html("<h4 class='text-danger'>Sorry. Correct answer is " + correctAnswer + "</h4>");
            $("#result").html("<img src='assets/images/Wrong.jpg' class='img-fluid' alt='Responsive image'>");
            losses++;
            setTimeout(nextQuestion, 3000)
        }
        updateScore();
    }

    function nextQuestion() {
        if (i + 1 === trivia.length) {
            endGame();
            return;
        }
        $("#question-pad").empty();
        $("#answers").empty();
        $("#result").empty();
        i++;
        time = 10;
        $("#display").html("00:" + time)
        stopTimer();
        startGame();
    }

    function endGame() {
        location.reload();
    }

    var timer;

    function startTimer() {
        timer = setInterval(checkTimesUp, 1000);

    }

    function stopTimer() {
        clearInterval(timer);
    }

    function checkTimesUp() {
        if (time <= 0) {
            nextQuestion();
            losses++;
            updateScore();
        } else {
            time--;
            $("#display").html("00:0" + time)
        }
    }

});
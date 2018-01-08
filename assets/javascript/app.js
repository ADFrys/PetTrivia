$(document).ready(function() {
  
  var correctAnswers = {
  q1: "7x",
  q2: "10v",
  q3: "100v",
  q4: "red",
  q5: "400x",
  q6: "longTail",
  q7: "9s",
  q8: "43y",
  };
// create an empty object 
// answer chosen with same notation (for each question id)
// chosen[name] = question
// answers[q1] = val

  var countDownNumber = 120;
  var time;
  var question;
  var answerQ;
  var numberCorrect = 0;
  var numberIncorrect = 0;
  var unansweredQ = 8;

  function check(answer, name) {
    for (var i=0; i<9; i++) {
    question = "q"+[i];
  }
    if (answer == correctAnswers[name]) {
      numberCorrect++;
      unansweredQ--;
    }
    else if (answer !== correctAnswers[name]) {
      unansweredQ--;
      numberIncorrect++;
      console.log("name correcta" + correctAnswers[name]);
    } 
  }

  function stop() {
	clearInterval(time);
  check(answerQ, question);
	$(".remaining-time").text(" " + countDownNumber + " ");
	$(".body").empty();
	$(".body").html("<h1>Thank you for playing pet trivia!</h1>" + "<p>" + "Number Correct: " + numberCorrect + "</p>");
	$(".body").append("<p>" + "Number Incorrect: " + numberIncorrect + "</p>");
	$(".body").append("Unanswered questions: " + unansweredQ + " ");
  }

  function oneTwentyS() {
    countDownNumber--;
    $(".remaining-time").text(" " + countDownNumber + " ");
    if (countDownNumber == 0) {
    stop();
    }
  }

  $(".remaining-time").append(" " + countDownNumber + " ");
  time = setInterval(oneTwentyS, 1000);

//create as an object
  $("input[type=radio]").on("click", function() {
    answerQ = $("input[type=radio]:checked").val();
    console.log("answerQ " + answerQ);
    console.log(question + "question")
  });


  $("form").submit(function quizDone() {
    event.preventDefault();
    check(answerQ, question);
    $(".body").empty();
    $(".body").html("<h1>Thank you for playing pet trivia!</h1>" + "<p>" + "Number Correct: " + numberCorrect + "</p>");
    $(".body").append("<p>" + "Number Incorrect: " + numberIncorrect + "</p>");
    $(".body").append("Unanswered questions: " + unansweredQ + " ");
  });
});


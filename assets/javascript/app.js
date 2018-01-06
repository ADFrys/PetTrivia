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

  var countDownNumber = 5;
  var time;
  var answerQ1;
  var numberCorrect = 0;
  var numberIncorrect = 0;
  var unansweredQ = 8;

  function check(answer, name) {
    if (answer == correctAnswers[name]) {
      alert("hello");
      numberCorrect++;
      unansweredQ--;
      console.log(numberCorrect);
    }
    else if (answer !== correctAnswers[name]) {
      unansweredQ--;
      numberIncorrect++;
    } 
  }

  function stop() {
	clearInterval(time);
	$(".remaining-time").text(" " + countDownNumber + " ");
	$(".body").empty();
	$(".body").html("<h1>Thank you for playing pet trivia!</h1>" + "<p>" + "Number Correct: " + numberCorrect + "</p>");
	$(".body").append("<p>" + "Number Incorrect: " + numberIncorrect + "</p>");
	$(".body").append("Unanswered questions: " + unansweredQ + " ");
	console.log(numberCorrect + "check");
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

  $("input[type=radio][name=q1]").on("click", function() {
    answerQ1 = $("input[type=radio][name=q1]:checked").val();
    console.log(answerQ1);
    check(answerQ1, "q1");
  });

  $("form").submit(function quizDone() {
    event.preventDefault();
    $(".body").empty();
    $(".body").html("<h1>Thank you for playing pet trivia!</h1>" + "<p>" + "Number Correct: " + numberCorrect + "</p>");
    $(".body").append("<p>" + "Number Incorrect: " + numberIncorrect + "</p>");
    $(".body").append("Unanswered questions: " + unansweredQ + " ");
    console.log(numberCorrect + "check");
  });
});

// userAnswer = (correctAnswers[i].$('input[name=q'+i+']:checked')||{}).value;


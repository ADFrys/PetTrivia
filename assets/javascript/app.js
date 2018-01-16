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

  var newUserAnswer = {};
  var countDownNumber = 120;
  var time;
  var question;
  var numberCorrect = 0;
  var numberIncorrect = 0;
  var unansweredQ = 8;

  var getVals = function() {
    $("input[type=radio]").each(function() {
  	  name = $(this).attr('name'),
  	  val = $(this).attr('value');
  	  if($(this).prop('checked')) {
  	    newUserAnswer[name] = val;
        console.log("name " + name);
        console.log(" val " + val);
        console.log("new user answer " + newUserAnswer[name]);
  	  }
    });
  }

  function check() {
    for (var i=1; i<9; i++) { 
      question = "q" + i;
      console.log("newUserAnswer" + newUserAnswer[question]);
      if (newUserAnswer[question] == correctAnswers[question]) {
        numberCorrect++;
        unansweredQ--;
      }
      else if (newUserAnswer[question] === undefined) {
        console.log("You missed a question");
      }
      else if (newUserAnswer[question] !== correctAnswers[question]) {
        unansweredQ--;
        numberIncorrect++;
        console.log("name correcta" + correctAnswers[question] + " " + question);
      } 
    }
  }

  function stop() {
	clearInterval(time);
    getVals();
    check();
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

  $("form").submit(function quizDone() {
    event.preventDefault();
    stop();
  });
});
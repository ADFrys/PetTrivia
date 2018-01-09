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

var userAnswer = { 
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
};

  var countDownNumber = 120;
  var time;
  var question;
  // var answerQ;
  var numberCorrect = 0;
  var numberIncorrect = 0;
  var unansweredQ = 8;

// userAnswer = $('input[name=q' + i +']:checked") || {}).value;

  $("input[type=radio]").on("change", function() {

    var answerQ = $("input[type=radio][name^=q]:checked");
    userAnswer[answerQ.attr("name")] = answerQ.val();
    console.log("userAnswer " + userAnswer[answerQ.attr("name")]);
    console.log("answerQname " + answerQ.attr("name"));
    console.log("answerQval " + answerQ.val());
  });


  function check() {
    for (var i=0; i<8; i++) { 
     question = "q" + i;


  // userAnswer = (correctAnswers[i].$('input[name=q'+i+']:checked')||{}).value;

    if (userAnswer[question] == correctAnswers[question]) {
      numberCorrect++;
      unansweredQ--;
    }
    else if (userAnswer[question] !== correctAnswers[question]) {
      unansweredQ--;
      numberIncorrect++;
      console.log("name correcta" + correctAnswers[question] + " " + question);
   } 
  }
}

  function stop() {
	clearInterval(time);
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
    check();
    $(".body").empty();
    $(".body").html("<h1>Thank you for playing pet trivia!</h1>" + "<p>" + "Number Correct: " + numberCorrect + "</p>");
    $(".body").append("<p>" + "Number Incorrect: " + numberIncorrect + "</p>");
    $(".body").append("Unanswered questions: " + unansweredQ + " ");
  });
});


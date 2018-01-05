var CorrectAnswers = {
  q1: "7x",
  q2: "10v",
  q3: "100v",
  q4: "red",
  q5: "400x",
  q6: "longTail",
  q7: "9s",
  q8: "43y",
};

var numberCorrect = 0;
var numberIncorrect = 8;
var unansweredQ = 8;
var countDownNumber = 120;
var time;

$(".number-correct").append(" " + numberCorrect + " ");
$(".number-incorrect").append(" " + numberIncorrect + " ");
$(".Unanswered").append(" " + unansweredQ + " ");

function stop() {
  clearInterval(time);
  $(".remaining-time").text(" " + countDownNumber + " ");
  window.location.href = 'closing.html'
}

function oneTwentyS() {
  countDownNumber--;
  $(".remaining-time").text(" " + countDownNumber + " ");
  if (countDownNumber == 0) {
	stop();
  }
}

$(document).ready(function() {
  $(".remaining-time").append(" " + countDownNumber + " ");
  time = setInterval(oneTwentyS, 1000);
});

// var answerQ1 = $('input[name=q1a]:checked').val();

var answerQ1 = $('input[name=q1]').val();
console.log(answerQ1)



// if user picks correct answer, count towards correct answer
// if user picks incorrect answer, count towards incorrect answer

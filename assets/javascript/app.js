
// when page loads, start timer for 120 seconds (setTimeout or setInterval)
var countDownNumber = 120;

$(document).ready(function() {
  $(".remaining-time").append(" " + countDownNumber + " ");
  setInterval(oneTwentyS, 1000);


// countdown remaining seconds using a function
// load new page that displays correct answers, wrong answers and unanswered questions
function oneTwentyS() {
  countDownNumber--;
  $(".remaining-time").text(" " + countDownNumber + " ");
}

//this does not work right now. Need to fix.
function stop() {
	clearInterval(oneTwentyS);
	window.location("../../closing.html");
};

if (countDownNumber === 0) {
	stop();
}

// //

// // create object that stores correct answers
// var CorrectAnswers = {
// 	q1: "7x",
// 	q2: "10v",
// 	q3: "100v",
// 	q4: "red",
// 	q5: "400x",
// 	q6: "longTail",
// 	q7: "9s",
// 	q8: "43y",
// };

// if user picks correct answer, count towards correct answer
// if user picks incorrect answer, count towards incorrect answer

});


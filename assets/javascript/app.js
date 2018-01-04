// when page loads, start timer for 120 seconds (setTimeout or setInterval)
window.onload = function() {
setTimeout(oneTwentyS, 120000);
};

// countdown remaining seconds using a function
// load new page that displays correct answers, wrong answers and unanswered questions
function oneTwentyS() {

}
//

// create object that stores correct answers
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

// if user picks correct answer, count towards correct answer
// if user picks incorrect answer, count towards incorrect answer


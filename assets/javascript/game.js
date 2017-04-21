var corrects = 0;
var incorrects = 0;

var questions = ["A dodecahedron has how many faces?", 
				"A triangle with all sides a different length is called", 
				"A rhombus cannot also be a ", 
				"The sum of the internal angles of a hexagon is", 
				"A decagon has how many sides?", 
				"This shape has the shortest perimeter of all shapes with the same area"];
var choice1 = ['10', 'isosceles', 'trapezoid', '180 degrees', '8', 'square'];
var choice2 = ['12', 'scalene', 'kite', '360 degrees', '10', 'pentagon'];
var choice3 = ['100', 'monotonic', 'square', '720 degrees', '12', 'circle'];
var choice4 = ['1000', 'equilateral', 'parallelogram', '1080 degrees', '52', 'octogon'];
var answers = ['12', 'scalene', 'trapezoid', '720 degrees', '10', 'circle'];
var anskey = [4, 2, 1, 3, 2, 3];
var qnum = 0;
var countdown;
var rightwrong = "";

$(document).ready(function() {

function setQA () {
	$("#choices").empty();
	$("#question").empty();
	$("#countdown").empty();
	//if there are unasked questions
	if (qnum < questions.length) {
		$("#countdown").html("<h3>" + 10 + " seconds to answer</h3>");
		//initialize timer
		countdown = 10;
		var timer = setInterval(function() {
			$("#countdown").html("<h3>" + countdown + " seconds to answer</h3>");
			countdown--;
			if (countdown === -1) {
				clearInterval(timer);
				// Message Time has expired
				$("#countdown").html("<h3>Time has expired</h3>");
				// Prevent picking after time is up
				$("#choices").empty();
				rightwrong = "TIME'S UP!";
				setTimeout(resultScreen, 2000);
				
			}
		}, 1000);
		timer;


		//get question from arry and populate question div
		var q = "<div><h2>" + questions[qnum] + "</h2></div>";
		$("#question").html(q);

		//get answer choices and populate choices div
		var c1 = $("<div>");
		c1.text(choice1[qnum]);
		c1.addClass("answers");
		c1.attr("data-choice", 1);

		var c2 = $("<div>");
		c2.text(choice2[qnum]);
		c2.addClass("answers");
		c2.attr("data-choice", 2);

		var c3 = $("<div>");
		c3.text(choice3[qnum]);
		c3.addClass("answers");
		c3.attr("data-choice", 3);

		var c4 = $("<div>");
		c4.text(choice4[qnum]);
		c4.addClass("answers");
		c4.attr("data-choice", 4);
		
		$("#choices").empty();
		$("#choices").append(c1);
		$("#choices").append(c2);
		$("#choices").append(c3);
		$("#choices").append(c4);

		
		// Click event for answers
		$(".answers").on("click", function() {
		//retrieve data attr
			var ans = parseInt($(this).attr("data-choice"));
		//increment corrects or incorrects
			if (ans === anskey[qnum]) {
				corrects++;
				rightwrong = "CORRECT!"; 
			} else {
				incorrects++;
				rightwrong = "SORRY!";
			}
		//stop countdown
			clearInterval(timer);
		//call for results screen
			resultScreen();

		});	
		

	//Final Results
	} else if (qnum === questions.length) {
		var noresponse = questions.length - incorrects - corrects;
		$("#question").html("<p>You got " + corrects + " questions correct, "+ incorrects +
			" questions incorrect, and failed to answer " + noresponse + " questions.</p>");
		$("#choices").empty();
		$("#buttons").show();
		$("#start").text("Take quiz again");

		
	}
};

function resultScreen() {
	//Use next set of question and choices.
	$("#countdown").html("<h3>" + rightwrong + "</h3");
	$("#choices").html("<h3>The correct answer was:</p><p>" + answers[qnum] + "</h3>");
	qnum++;
	setTimeout(setQA, 5000);	
};



//Start button on click to start questions and timer
$("#start").on("click", function() {
	qnum = 0;
	corrects = 0;
	incorrects = 0;
	setQA();
	$("#buttons").hide();
});




//closes document ready
});
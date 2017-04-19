var corrects = 0;
var incorrects = 0;

var questions = ["Who", "What", "When", "Where", "Why", "How"];
var choice1 = ['a', 'b1', 'c1', 'd1', 'e', 'f1'];
var choice2 = ['a2', 'b2', 'c', 'd', 'e2', 'f2'];
var choice3 = ['a3', 'b3', 'c3', 'd3', 'e3', 'f3'];
var choice4 = ['a4', 'b', 'c4', 'd4', 'e4', 'f'];
var answers = ['a', 'b', 'c', 'd', 'e', 'f'];
var anskey = [1, 4, 3, 2, 1, 4];
var qnum = 0;
var countdown;

$(document).ready(function() {

function setQA () {
	//if there are unasked questions
	if (qnum < questions.length) {

		//initialize timer
		var countdown = 10;
		var timer = setInterval(function() {
			$("#countdown").html("<h3>" + countdown + " seconds to answer</h3>");
			countdown--;
			if (countdown === -1) {
				clearInterval(timer);
				// Message Time has expired
				$("#countdown").html("<h3>Time has expired</h3>");
				setTimeout(resultScreen, 3000);
				
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
			} else {
				incorrects++;
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
		var newStart = $("<button>");
		newStart.text("Take the quiz again");
		newStart.addClass("start");
		$("#countdown").html(newStart);
		$("#choices").empty();
		qnum = 0;
	}
};

function resultScreen() {
	//Use next set of question and choices.
	$("#countdown").empty();
	$("#choices").html("<p>The correct answer was:</p><p>" + answers[qnum] + "</p>");
	qnum++;
	setTimeout(setQA, 5000);	
};



// Start button on click to start questions and timer
$(".start").on("click", function() {
	qnum = 0;
	corrects = 0;
	incorrects = 0;
	setQA();
});

$("#startAgain").on("click", function() {
	qnum = 0;
	corrects = 0;
	incorrects = 0;
	setQA();
});


//closes document ready
});
var corrects = 0;
var incorrects = 0;

var questions = [];
var choice1 = [];
var choice2 = [];
var choice3 = [];
var choice4 = [];

function setQA (num) {
	if (num === parseInt(num, 10)) {
		//initialize timer

		//populate question

		//populate answers

	} else if (num === "begin") {
		$("#question").html("<button id="start"> Start Game</button>");
		$("#choices").empty();
		$("#countdown").empty();
	}
};

function resultScreen (num) {

};

// Click event for answers

// Start button on click to start questions and timer
$("#start").on("click", function() {
	setQA(1);

});
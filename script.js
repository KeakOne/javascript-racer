
  // getting html elements
// var numPlayers = 2;
var trackLength = 20;
var strip1 = document.querySelector("#player1_strip");
var strip2 = document.querySelector("#player2_strip");
//var playerOneStripSelector = "#player1_strip";
//var playerTwoStripSelector = "#player2_strip";



document.addEventListener("keyup", keyPressed, false);
 

//keypressed needs to check which playerstrip/player to start "movement" on

	function keyPressed(e) {
		if (e.keyCode === 81) {
			moveCar(1);
		} else if (e.keyCode === 80) {
			moveCar(2);
		} 
	};

//moveCar needs to find which player strip to initiate movement
	var moveCar = function (playerNumber) {
		//var movingCar = document.querySelector(playerStrip+" .active");

		console.log("#player"+ playerNumber +"_strip .active")
		var movingCar = document.querySelector("#player"+ playerNumber +"_strip .active");

		movingCar.classList.remove("active");
		movingCar = movingCar.nextElementSibling;
		movingCar.classList.add("active");

		// movingCar.nextElementSibling = movingCar.classList.add('.active');
		};
		// movingCar = movingCar.nextElementSibling;
		// movingCar.classList.add('.active');
		// movingCar.previousElementSibling.classList.remove('.active');
	
//appending & taking away the active class, giving the illusion of movement??//




//write a winner function, could be a for loop that checks against the tracklength??

	// function checkForWinner() {
	// 	if (movingCar === null) {
	// 		alert("a winner is you")
	// 	}
	// }





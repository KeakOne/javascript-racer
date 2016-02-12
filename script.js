
// var trackLength = document.getElementById("chooseTrackLength").value; 
var trackLength = 10;
var strip1 = document.querySelector("#player1_strip");
var strip2 = document.querySelector("#player2_strip");
var p1score = 0;
var p2score = 0;



document.addEventListener("keyup", keyPressed, false);
 

//keypressed needs to check which playerstrip/player to start "movement" on

	function keyPressed(e) {
		if (e.keyCode === 81) {
			if (p1score < trackLength) {
			moveCar(1);
			p1score ++;
			}
			else if (p1score == trackLength) {
				alert("p1 winzzz");
			};
		} 
		else if (e.keyCode === 80) {
			if (p2score < trackLength) {
			moveCar(2);
			p2score ++;
			} 
			else if (p2score == trackLength) {
				alert("p2 winzzz");
			};
		};
	};

//moveCar needs to find which player strip to initiate movement
	var moveCar = function (playerNumber) {
		console.log("#player"+ playerNumber +"_strip .active")
		var movingCar = document.querySelector("#player"+ playerNumber +"_strip .active");
		movingCar.classList.remove("active");
		movingCar = movingCar.nextElementSibling;
		if (movingCar == null) {
			alert( "Woohoo! Player"+playerNumber+" wins!");
			location.reload()
		};
		movingCar.classList.add("active");
		};

	
//appending & taking away the active class, giving the illusion of movement??//






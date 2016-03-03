
// var trackLength = document.getElementById("chooseTrackLength").value; 
var trackLength = 13;
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
			if (p2score == trackLength) {
				alert("p2 winzzz");
			};
		}
		else (e.keyCode === 65); {
			jumpCar(1);
			if (e.keyCode == 76); {
				jumpCar(2);
			};
		};
	};


		// if else (e.keyCode === 65) {
		// 		jumpCar(1);
		// 	if (e.keyCode === 76) {
		// 		jumpCar(2);
		// 	}
		// }

//moveCar needs to find which player strip to initiate movement
	var moveCar = function (playerNumber) {
		// console.log("#player"+ playerNumber +"_strip .active")
		var movingCar = document.querySelector("#player"+ playerNumber +"_strip .active");
		var obstacle = document.querySelector("#player"+ playerNumber +"_strip .obstacle");

		movingCar.classList.remove("active");
		movingCar = movingCar.nextElementSibling;
		if (movingCar == null) {
			alert( "Woohoo! Player"+playerNumber+" wins!");
			location.reload()
		} else if (movingCar == obstacle) {
			hitObstacle(playerNumber);
		} else {
		};
		movingCar.classList.add("active");
		};

	
//a td element has the class of obstacle, if any car touches it the game is over for that player
//if the moving car.nextelementsibling is the class of obstacle, you must press spacebar
//if you dont press spacebar and movingcar gets to the class of obstacle you lose
//if movingcar.nextelement sibling is .obstacle and you press q/p, you lose, spacebar must be pressed to pass


//game ends when hitObstacle runs
	var hitObstacle = function (playerNumber) {
		alert("You broke the egg player" + playerNumber + "! Remember to jump");
		location.reload();
	}

//listening for player to press their jump key.
// needs to check if next class is obstacle to tell if jump worked
	document.addEventListener("keyup", jumpCar, false);

	function jumpCar(playerNumber) {
		console.log(playerNumber);

	};





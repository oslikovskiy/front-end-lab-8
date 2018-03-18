var question = confirm("Do you want to play a game?");


if (question == true) {

	var question2;
	var userNumber;
	var win = 0;

	console.log("Let's start the game, you have 3 attemps to guess the number =) ");

	for (var i = 1; i <= 3; i++) {

		userNumber = parseInt(prompt("Please enter the number from 0 to 5"));
		var randomNumber = parseInt(Math.round(Math.random() * 5));

		if (i == 1 && userNumber == randomNumber) {
			question2 = confirm("You win 10$, do you wont to play again?");
			win = win + 10;
			if (question2 = true) {
				i = 0;
			} else {
				alert("Thank you for a game. Your prize is: " + win + "$");
				break;
			}
		} else if (i == 2 && userNumber == randomNumber) {
			question2 = confirm("You win 5$, do you wont to play again?");
			win = win + 5;
			if (question2 = true) {
				i = 0;
			} else {
				alert("Thank you for a game. Your prize is: " + win + "$")
				break;
			}
		} else if (i == 3 && userNumber == randomNumber) {
			question2 = confirm("You win 2$, do you wont to play again?");
			win = win + 2;
			if (question2 = true) {
				i = 0;
			} else {
				alert("Thank you for a game. Your prize is: " + win + "$");
				break;
			}
		} else if (i == 3 && userNumber != randomNumber) {
			question2 = confirm("Sorry, but you loose... You can try it again !!! ");
			if (question2 == true) {
				i = 0;
			} else {
				alert("Yiu win " + win + "$");
				break;
			}
		}
	}
} else {
	console.log("You did not become a millionaire ...");
}

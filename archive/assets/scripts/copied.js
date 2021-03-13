

		var score = 15;

		while (score > 0 && score < 30) {
			var firstQuestion = prompt("What's the capital of Italy?");
			if (firstQuestion == "Rome") {
				score = score + 5;
				confirm("You are right!");
				console.log("Your score is: " + score);
			} else {
				score = score - 5;
				confirm("You are wrong");
				console.log("Your score is: " + score);
			}

			var secondQuestion = prompt("What's the capital of France?");
			if (secondQuestion == "Paris") {
				score = score + 5;
				confirm("You are right!");
				console.log("Your score is: " + score);
			} else {
				score = score - 5;
				confirm("You are wrong");
				console.log("Your score is: " + score);
			}

			var thirdQuestion = prompt("What's the capital of Spain?");
			if (thirdQuestion == "Madrid") {
				score = score + 5;
				confirm("You are right!");
				console.log("Your score is: " + score);
			} else {
				score = score - 5;
				confirm("You are wrong");
				console.log("Your score is: " + score);
			}

			/*
			if (score == 0) {
				alert("You lose!");
			} else if (score == 30) {
				alert("You win!");
			} else {
				alert("Something went wrong!");
			}
			*/
			switch (score) {
				case 0:
					alert("You lose!");
					break;
				case 30:
					alert("You win!");
					break;
				default:
					alert("Something went wrong!");
					break;
			}
		}

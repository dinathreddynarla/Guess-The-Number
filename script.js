var ran = Math.floor(Math.random() * 100) + 1;
        console.log(ran);
        var guessCount = 0;
        var maxGuesses = 10;

        var submitButton = document.querySelector("#submitguess");
        var infoParagraph = document.querySelector(".info");
        var attemptsParagraph = document.querySelector(".attempts");

        submitButton.addEventListener("click", () => {
            var numberInput = document.querySelector("#guessnumber");
            var guessedNumber = parseInt(numberInput.value);

            guessCount++;

            if (guessCount <= maxGuesses) {
                var difference = Math.abs(guessedNumber - ran);

                if (guessedNumber === ran) {
                    infoParagraph.innerText = "🎉 BOOM! You nailed it! The number is correct! 💥";
                    window.open("./fireworks.html")
                    submitButton.disabled = true;
                }
                else if (guessedNumber > ran) {
                    if (difference <= 10) {
                        infoParagraph.innerText = "🔥 You're just a tiny bit too high, but you're on FIRE! Keep going! 🔥";
                    } else if (difference > 10 && difference <= 25) {
                        infoParagraph.innerText = "⚡ Your guess is a bit high, but you're warming up! You can do this! ⚡";
                    } else {
                        infoParagraph.innerText = "🤔 Your guess is too high. Time to shift gears! You've got this! 💪";
                    }
                }
                else {
                    if (difference <= 10) {
                        infoParagraph.innerText = "🔥 So close! You're just a tiny bit too low, but you're almost there! Keep it up! 🔥";
                    } else if (difference > 10 && difference <= 25) {
                        infoParagraph.innerText = "⚡ Your guess is a bit low, but you're closing in! Stay sharp! ⚡";
                    } else {
                        infoParagraph.innerText = "🤔 Your guess is too low. Time to kick it up a notch! Go for it! 💪";
                    }
                }

                attemptsParagraph.innerText = `🚀 Guesses used: ${guessCount}/${maxGuesses}. Keep pushing!`;
            }

            if (guessCount >= maxGuesses && guessedNumber !== ran) {
                infoParagraph.innerText = `😢 Oh no! You're out of guesses. The correct number was ${ran}. Don't give up, try again! 💪`;

                submitButton.disabled = true;
            }

            numberInput.value = "";
        });
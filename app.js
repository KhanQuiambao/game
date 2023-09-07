let game = () => {
    let pScore = 0;
    let cScore = 0;
    let rNumber = 0;
  
    //Start the Game
    let startGame = () => {
        let playBtn = document.querySelector(".intro button");
        let introScreen = document.querySelector(".intro");
        let match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    let playMatch = () => {
        let options = document.querySelectorAll(".options button");
        let playerHand = document.querySelector(".player-hand");
        let computerHand = document.querySelector(".computer-hand");
        let hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      let computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          let computerNumber = Math.floor(Math.random() * 3);
          let computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    let updateScore = () => {
        let playerScore = document.querySelector(".player-score p");
        let computerScore = document.querySelector(".computer-score p");
        let rounds = document.querySelector(".round p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      rounds.textContent = rNumber;
    };
  
    

    let compareHands = (playerChoice, computerChoice) => {
      //Update Text
      let winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Its a Tie";
        rNumber++;
        updateScore();
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++,rNumber++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++,rNumber++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++,rNumber++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++,rNumber++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++,rNumber++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++,rNumber++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();

     let resetGame = () => {
        pScore = 0;
        cScore = 0;
        rNumber = 0;
        updateScore();
        alert("Game Reset");
     }

    let resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", resetGame);
    
  };

  
  
  //start the game function
  game();

  
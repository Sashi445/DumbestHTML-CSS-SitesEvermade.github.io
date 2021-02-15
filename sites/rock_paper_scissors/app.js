const app = () => {
  let pScore = 0;
  let cScore = 0;

  console.log("App running!!");

  const startGame = () => {
    const startGameButton = document.querySelector(".startGame");

    const introSection = document.querySelector(".intro");

    const gameSection = document.querySelector('.game');

    startGameButton.addEventListener("click", function () {
      introSection.classList.add("fadeOut");
      gameSection.classList.add("fadeIn");
      console.log("Clicked me!!");
    });
  };

  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    options.forEach(function (option) {
      option.addEventListener("click", function () {
        if(pScore > 15 || cScore > 15){
            const winner  = pScore > cScore ? 'Player' : 'Computer';
            console.log(winner)
            const wrapper = document.querySelector('.game')
            const winnerInfo = document.createElement('h3')
            if (winner  == 'Player'){
                winnerInfo.textContent = "Hurray! You made it."
            }else{
                winnerInfo.textContent = "Computer is smarter than you!! Better luck next time"
            }
            winnerInfo.style.textAlign = 'center'
            wrapper.style.display = 'flex'
            const refreshButton = document.createElement('button')
            refreshButton.textContent = " Play Again ?"
            refreshButton.addEventListener('click', function(){
                window.location.reload();
            })
            winnerInfo.appendChild(refreshButton)
            wrapper.replaceWith(winnerInfo);
        }
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        const gameOptions = ["rock", "paper", "scissors"];
        const computerChoice = gameOptions[Math.floor(Math.random() * 3)];
        const playerChoice = this.textContent;
        changeHands(playerChoice, computerChoice);
        evaluate(playerChoice, computerChoice);
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      });
    });
  };

  const evaluate = (playerChoice, computerChoice) => {
    const info = document.querySelector(".info h2");

    if (playerChoice === computerChoice) {
      info.textContent = "It's a tie!!";
      return;
    }

    if (playerChoice == "rock") {
      if (computerChoice == "paper") {
        info.textContent = "Computer Wins!!";
        cScore++;
      } else {
        info.textContent = "Player Wins!!";
        pScore++;
      }
      return;
    }

    if (playerChoice == "scissors") {
      if (computerChoice == "rock") {
        info.textContent = "Computer Wins!!";
        cScore++;
      } else {
        info.textContent = "Player Wins!!";
        pScore++;
      }
      return;
    }

    if (playerChoice == "paper") {
      if (computerChoice == "scissors") {
        info.textContent = "Computer Wins!!";
        cScore++;
      } else {
        info.textContent = "Player Wins!!";
        pScore++;
      }
      return;
    }
  };

  const changeHands = (playerChoice, computerChoice) => {
    const playerHand = document.querySelector(".player-hand img");
    const computerHand = document.querySelector(".computer-hand img");
    playerHand.src = `./assets/${playerChoice}.png`;
    computerHand.src = `./assets/${computerChoice}.png`;
  };

  playGame();
  startGame();
};

app();

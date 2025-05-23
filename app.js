let userScore = 0;
let compScore = 0;
const msg = document.querySelector('#msg')
let choices = document.querySelectorAll(".choice"); 
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
//console.log(choices);
const drawGame = ()=>{ 
    console.log('Game was draw');
      msg.innerText = 'Draw'
       msg.style.backgroundColor = '#081b31';
}

const showWinner =(userWin,compChoice,userChoice)=>{ 
if(userWin ){ 
    console.log('You Win');
    userScore++; 
    userScorePara.innerText = userScore;
    msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = 'Green';
    
}else{ 
    console.log('You Loos');
    compScore++; 
    compScorePara.innerText = compScore;
    msg.innerText = `You lose.  ${compChoice} beats ${userChoice}`;
     msg.style.backgroundColor = 'red';
}
}

const playGame = (userChoice) => {
  //console.log(userChoice);
  //Generate Computer Choice
  const compChoice = genComputerChoice();
  console.log("Computer Choice = ", compChoice); 

  // Main condition for game 

  if(userChoice === compChoice){ 
    //draw Game 
    drawGame()
  }else{ 
      let userWin = true; 
      if(userChoice === 'rock'){ 
      userWin = compChoice === 'paper' ? false : true;
      } else if(userChoice === 'paper'){ 
       userWin = compChoice === 'Scissor'? false : true;
      }else{ 
      userWin = compChoice === 'rock'? false : true;
      }  

      
showWinner(userWin,compChoice,userChoice)
  }
};



const genComputerChoice = () => {
  //rock ,paper, scissors
  const options = ["rock", "paper", "Scissor"];
  let randIndex = Math.floor(Math.random() * 3);
  //console.log(randIndex);
  return options[randIndex];
};

choices.forEach((choice) => {
  // console.log(choice);

  choice.addEventListener("click", () => {
    //console.log('Choice was clicked');
    const userChoice = choice.getAttribute("id");
    console.log("User Choice = ", userChoice);
    playGame(userChoice);
  });
});



const scores={
  win:0,
  tie:0,
  loses:0,
  // totalScore:win-loses,
}
let scoreMessage=document.getElementById('scoremessage');
function resetButton(){
  scoreMessage.innerText=`You Have Reset The scores For The Game Win ${scores.win=0} Ties ${scores.tie=0} Loses ${scores.loses=0}  `

}

function playGame(playerMove) {


    
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
   

    if(result==='You win.'){
      scores.win+=1

    }else if(result==='Tie.'){
      scores.tie+=1
    }else if(result==='You lose.'){
      scores.loses+=1
    }

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins ${scores.win} , Ties ${scores.tie} , Loses ${scores.loses} `);
    
 
scoreMessage.innerText=`You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins ${scores.win} , Ties ${scores.tie} , Loses ${scores.loses} `



  }






function pickComputerMove(){
   const randomNumber=Math.random();

   let computerPicked="";

    if(randomNumber>=0 && randomNumber<1/3){
        computerPicked='rock';

    }else if(randomNumber>=1/3 && randomNumber<2/3){
        computerPicked='paper'

    }else if(randomNumber>=2/3 && randomNumber<1){
        computerPicked='scissors'

    }


    return computerPicked;


}



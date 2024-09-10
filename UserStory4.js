let numberOfPlayers = 8;
let round = 1;
let tournamentPlayers = [];
let battlePlayers = [];
let winnerPlayers = [];
let tournamentWinner;

function startTournament(n){
    if(n<2){
      return('At least 2 players are needed.');
    }
    else if(n>8){
      return('A maximum of 8 players are allowed.');
    }
    else{
      registerPlayers(n);
      assignOpponent();
      return ('The tournament WINNER is ' + tournamentWinner +'!!!')
    }
  }

function registerPlayers(n){
  for (x = 1; x <= n; x++){
    tournamentPlayers.push('Player '+x);
  }
  //console.log(tournamentPlayers);
  tournamentPlayers.sort( () => Math.random()-0.5);
}  

function assignOpponent(){
console.log('Round ' +round+ ' start!');
console.log('Current contenders: ' +tournamentPlayers);

  while (0 < tournamentPlayers.length){
    battlePlayers.push(tournamentPlayers[0]);  
    battlePlayers.push(tournamentPlayers[1]); 

    if (battlePlayers[1] === undefined) {
      tournamentPlayers.pop();
      console.log(battlePlayers[0] + ' wins by default!');
      winnerPlayers.push(battlePlayers[0]);
      battlePlayers.pop();
      battlePlayers.pop();
    }

    else{
    tournamentPlayers.splice(0,2);
    battle();
    }
  }

  advanceRound();
}

function battle() {
  let rndChoice = Math.floor(Math.random() * 3);
  var txtChoice;
  switch (rndChoice) {
    case 0:
      txtChoice = 'rock';
      break;
    case 1:
      txtChoice = 'paper';
      break;
    case 2:
      txtChoice = 'scissors';
      break;
  }
  let player2Choice = Math.floor(Math.random() * 3);
  var txtChoice2;
  switch (player2Choice) {
    case 0:
      txtChoice2 = 'rock';
      break;
    case 1:
      txtChoice2 = 'paper';
      break;
    case 2:
      txtChoice2 = 'scissors';
      break;
  }

  if(txtChoice == 'rock' && txtChoice2 == 'rock')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + 'Draw, go again!');
    battle();
  }
  else if(txtChoice == 'rock' && txtChoice2 == 'paper')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[1] + ' wins!');
    winnerPlayers.push(battlePlayers[1]);  
  }
  else if(txtChoice == 'rock' && txtChoice2 == 'scissors')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[0] + ' wins!');
    winnerPlayers.push(battlePlayers[0]);  
  }
  else if(txtChoice == 'paper' && txtChoice2 == 'rock')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[0] + ' wins!');
    winnerPlayers.push(battlePlayers[0]);  
  }
  if(txtChoice == 'paper' && txtChoice2 == 'paper')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + 'Draw, go again!');
    battle();
  }
  else if(txtChoice == 'paper' && txtChoice2 == 'scissors')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[1] + ' wins!');
    winnerPlayers.push(battlePlayers[1]);  
  }
  else if(txtChoice == 'scissors' && txtChoice2 == 'rock')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[1] + ' wins!');
    winnerPlayers.push(battlePlayers[1]);  
  }
  else if(txtChoice == 'scissors' && txtChoice2 == 'paper')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + battlePlayers[0] + ' wins!');
    winnerPlayers.push(battlePlayers[0]);  
  }
  if(txtChoice == 'scissors' && txtChoice2 == 'scissors')
  {
    console.log(battlePlayers[0] + ' draws ' + txtChoice + ', '
    + battlePlayers[1] + ' draws ' + txtChoice2 + '. '
    + 'Draw, go again!');
    battle();
  }

  battlePlayers.pop();
  battlePlayers.pop();
}

function advanceRound(){
  if(winnerPlayers.length == 1)
  {
    tournamentWinner = winnerPlayers[0];
  }
  else
  {
    round ++;
    tournamentPlayers = winnerPlayers;
    winnerPlayers = [];
    assignOpponent();
  }
}

console.log(startTournament(numberOfPlayers));
let squares = document.querySelectorAll("div.box")

squares.forEach( (square)=>{
  square.addEventListener( "click", handleClick)
} )

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let turn = 1;

function handleClick(event){
  const position = event.target.id;

  let marker = null;

  if( turn === 1){
    marker = `<i class="fas fa-circle"></i>`;
  }
  else{
    marker = `<i class="fas fa-times"></i>`;
  }

  if(checkIfAvailable(position)){
    updateDOM({position, marker});
  }

  if(checkGameOver()){
    sleep(100).then( () => {
      let winner = turn == 1 ? "Cross" : "Circle";
      alert("Game Over, the winner is: " + winner);
      cleanBoard();
    } );

  }


}

function checkIfAvailable(position){

  switch (position){
    case "sqr1":
      if(squares[0].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr2":
      if(squares[1].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr3":
      if(squares[2].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr4":
      if(squares[3].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr5":
      if(squares[4].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr6":
      if(squares[5].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr7":
      if(squares[6].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr8":
      if(squares[7].innerHTML == '')
        return 1;
      else
        return 0;
    case "sqr9":
      if(squares[8].innerHTML == '')
        return 1;
      else
        return 0;
  }

}

function updateDOM({ position, marker }){

  switch (position){
    case "sqr1":
      squares[0].innerHTML = marker;
      gameBoard[0] = turn;
      break;
    case "sqr2":
      squares[1].innerHTML = marker;
      gameBoard[1] = turn;
      break;
    case "sqr3":
      squares[2].innerHTML = marker;
      gameBoard[2] = turn;
      break;
    case "sqr4":
      squares[3].innerHTML = marker;
      gameBoard[3] = turn;
      break;
    case "sqr5":
      squares[4].innerHTML = marker;
      gameBoard[4] = turn;
      break;
    case "sqr6":
      squares[5].innerHTML = marker;
      gameBoard[5] = turn;
      break;
    case "sqr7":
      squares[6].innerHTML = marker;
      gameBoard[6] = turn;
      break;
    case "sqr8":
      squares[7].innerHTML = marker;
      gameBoard[7] = turn;
      break;
    case "sqr9":
      squares[8].innerHTML = marker;
      gameBoard[8] = turn;
      break;
  }

  turn = turn > 1 ? 1 : 2;

}

function checkGameOver(){

  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for( let i=0 ; i<winStates.length; i++){
    let state = winStates[i];
    let pos1 = state[0];
    let pos2 = state[1];
    let pos3 = state[2];

    if( gameBoard[pos1] == gameBoard[pos2] &&
      gameBoard[pos2] == gameBoard[pos3] &&
      gameBoard[pos1] !== 0){
      return true;
    }

  }

  return false;

}

function sleep(time){
  return new Promise(resolve => setTimeout(resolve, time));
}

function cleanBoard(){
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  squares.forEach( (square) => {
    square.innerHTML = '';
  } )

}

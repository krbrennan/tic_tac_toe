const boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';

boxes.forEach(function(box) {
  box.addEventListener("click", handleClick);
});

function handleClick(e) {
  // e.target.id matches with index.html
  // do a check to make sure its a valid move
  // mark the move
  // do a check to see if the valid move will win the game
  // have computer select box
  let selectedBox = e.target;
  if (validMove(selectedBox)) {
    handleMove(selectedBox);
  }
}

function validMove(box) {
  if (box.innerHTML === "") {
    return true
  } else return false
}

function handleMove(box) {
  box.innerHTML = currentPlayer;
  // if isWinner, return currentPlayer
  // else change current player
currentPlayerPositions();
  if (isWinner()) {
    return announceWinner();
  } else {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else currentPlayer = 'X';

  };
  // next, check to see if the move won.
  // probably want to move what's below into that check.
}


function winningCombo(ele) {
  // console.log(ele);
  ele === `${currentPlayer}`;
}

function isWinner() {
  const diagonal = [[0,4,8],[2,4,6]];
  const across = [[0,1,2],[3,4,5],[6,7,8]];
  const vertical = [[0,3,6],[1,4,7],[2,5,8]];

  thereIsAWinner = false;


  // aggregate all currentPlayer's positions
  // run through diagonal,across,vertical
  // if all of a set is contained (.every(winningCombo)) return true,
  // announce winner


  diagonal.forEach(function(set) {
    console.log(set);
  });
}

function currentPlayerPositions() {
  let positions = []
  boxes.forEach(function(box) {
    console.log(box.innerHTML);
  });
  return positions;
}

const winner = document.getElementById("winnerText");

function announceWinner() {
  // throw ${blah} wins! in some div
  winner.innerHTML = `${currentPlayer} Wins!`
  winner.style.visibility='visible';
  // add playAgain button
}

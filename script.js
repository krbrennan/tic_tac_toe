// ToDO:
// if a winningCombo is present, change the color of the winning squares

const boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';
let someoneWon = false;
const resetBtn = document.getElementById('button');
const winner = document.getElementById("winnerText");


boxes.forEach(function(box) {
  if (someoneWon === false) {
    box.addEventListener("click", handleClick);
  } else {
    showResetBtn();
  }
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

  // I'm not sure why isWinner() is needed but it is...
  // if (isWinner()) {
  // }
  isWinner();
  switchPlayer();

}


function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else currentPlayer = 'X';
}

  // next, check to see if the move won.
  // probably want to move what's below into that check.


function winningCombo(ele) {
  // console.log(ele);
  ele === `${currentPlayer}`;
}

function isWinner() {
  const winningCombos = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8]];

  let thereIsAWinner = false;
  let currentPlayerMoves = currentPlayerPositions();

  // aggregate all currentPlayer's positions__^
  // run through diagonal,across,vertical
  // if all of a set is contained (.every(winningCombo)) return true,
  // announce winner

  winningCombos.forEach(function(set) {
    if (contains(currentPlayerMoves, set)) {
      thereIsAWinner = true;
      colorBoxes(set);
      thereIsAWinner;
    }
  });
  thereIsAWinner;
}

// this function takes in currentPlayer moves array and checks
// if every move is contained in each of the possible "haystack" combinations
function contains(needles, haystack) {
  let playerMoves = needles.map(ele => parseInt(ele));

  return haystack.every(ele => playerMoves.includes(ele));
};


function currentPlayerPositions() {
  let positions = []
  boxes.forEach(function(box) {
    if (box.innerHTML === currentPlayer) {
      positions.push(box.id);
    }
  });
  // Successfully returns box id's of currentPlayer positions
  return positions;
}


// Presenting winner, showing reset button, stop players from clicking

function announceWinner() {
  // throw ${blah} wins! in some div
  winner.innerHTML = `${currentPlayer} Wins!`
  winner.style.visibility='visible';
  currentPlayer = 'X';
  colorBoxes;
  // add playAgain button
}


function showResetBtn() {
  resetBtn.style.visibility='visible';
}

resetBtn.addEventListener('click', stopPlaying);

function stopPlaying() {
  boxes.forEach(function(box) {
    box.innerHTML = "";
    box.style.color='black';
    box.style.background='white';
    winner.style.visibility='hidden';
    resetBtn.style.visibility='hidden';
  });
}

function colorBoxes(winners) {
  let winningNums = winners;
  // console.log(winningNums);
  boxes.forEach(function(box) {
    let id = parseInt(box.id);
    if (id === winningNums[0]) {
      box.style.color="red";
      box.style.background='yellow';
    } else if (id === winningNums[1]) {
      box.style.color="red";
      box.style.background='yellow';
    } else if (id === winningNums[2]) {
      box.style.color="red";
      box.style.background='yellow';
    }
  });
  announceWinner();
  showResetBtn();
  switchPlayer();
}

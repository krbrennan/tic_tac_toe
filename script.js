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

  let thereIsAWinner = false;

  let currentPlayerMoves = currentPlayerPositions();
  console.log(currentPlayerMoves);

  // aggregate all currentPlayer's positions__^
  // run through diagonal,across,vertical
  // if all of a set is contained (.every(winningCombo)) return true,
  // announce winner

  diagonal.forEach(function(set) {
    if (contains(currentPlayerMoves, set)) {
      thereIsAWinner = true;
    }
  });

  across.forEach(function(set) {
    if (contains(currentPlayerMoves, set)) {
      thereIsAWinner = true;
    }
  });

  vertical.forEach(function(set) {
    if (contains(currentPlayerMoves, set)) {
      thereIsAWinner = true;
    }
  })
  return thereIsAWinner;
}

// this function takes in currentPlayer moves array and checks
// if every move is contained in each of the possible "haystack" combinations
function contains(needles, haystack) {
  if (needles.length >= 3) {
    return needles.every(needle => haystack.includes(parseInt(needle)));
  }
};



function currentPlayerPositions() {
  let positions = []
  boxes.forEach(function(box) {
    if (box.innerHTML === currentPlayer) {
      positions.push(box.id);
    }
  });
  // Successfully returns id of currentPlayer positions
  return positions;
}

const winner = document.getElementById("winnerText");

function announceWinner() {
  // throw ${blah} wins! in some div
  winner.innerHTML = `${currentPlayer} Wins!`
  winner.style.visibility='visible';
  // add playAgain button
}

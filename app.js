const gameStatus = document.querySelector('.status');
const grid = document.querySelectorAll('.game-cell');
const playerX = '×';
const playerO = 'o';
var gameIsLive = true;
var playerXTurn = true;

const winHandler = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    gameStatus.innerHTML = `Player X Wins!`;
  } else {
    gameStatus.innerHTML = `Player O Wins!`;
  }
};

const gamePlay = () => {
  const topLeftSquare = grid[0].classList[1];
  const topMiddleSquare = grid[1].classList[1];
  const topRightSquare = grid[2].classList[1];
  const leftMiddleSquare = grid[3].classList[1];
  const centerSquare = grid[4].classList[1];
  const rightMiddleSquare = grid[5].classList[1];
  const lowerLeftSquare = grid[6].classList[1];
  const lowerMiddleSquare = grid[7].classList[1];
  const lowerRightSquare = grid[8].classList[1];
 
  if (topLeftSquare && topLeftSquare === topMiddleSquare && topLeftSquare === topRightSquare) {
      winHandler(topLeftSquare);
      grid[0].classList.add('won');
      grid[1].classList.add('won');
      grid[2].classList.add('won');
  } else if (topLeftSquare && topLeftSquare === leftMiddleSquare && topLeftSquare === lowerLeftSquare) {
      winHandler(topLeftSquare);
      grid[0].classList.add('won');
      grid[3].classList.add('won');
      grid[6].classList.add('won');
  } else if (topMiddleSquare && topMiddleSquare === centerSquare && topMiddleSquare === lowerMiddleSquare) {
      winHandler(topMiddleSquare);
      grid[1].classList.add('won');
      grid[4].classList.add('won');
      grid[7].classList.add('won');
  } else if (topRightSquare && topRightSquare === rightMiddleSquare && topRightSquare === lowerRightSquare) {
      winHandler(topRightSquare);
      grid[2].classList.add('won');
      grid[5].classList.add('won');
      grid[8].classList.add('won');
  } else if (leftMiddleSquare && leftMiddleSquare === centerSquare && leftMiddleSquare === rightMiddleSquare) {
      winHandler(leftMiddleSquare);
      grid[3].classList.add('won');
      grid[4].classList.add('won');
      grid[5].classList.add('won');
  } else if (lowerLeftSquare && lowerLeftSquare === lowerMiddleSquare && lowerLeftSquare === lowerRightSquare) {
      winHandler(lowerLeftSquare);
      grid[6].classList.add('won');
      grid[7].classList.add('won');
      grid[8].classList.add('won');
  } else if (topLeftSquare && topLeftSquare === centerSquare && topLeftSquare === lowerRightSquare) {
        winHandler(topLeftSquare);
        grid[0].classList.add('won');
        grid[4].classList.add('won');
        grid[8].classList.add('won');
  } else if (topRightSquare && topRightSquare === centerSquare && topRightSquare === lowerLeftSquare) {
        winHandler(topRightSquare);
        grid[2].classList.add('won');
        grid[4].classList.add('won');
        grid[6].classList.add('won');
  } else if (topLeftSquare && topMiddleSquare && topRightSquare && leftMiddleSquare && centerSquare && rightMiddleSquare && lowerLeftSquare && lowerMiddleSquare && lowerRightSquare) {
    gameIsLive = false;
    gameStatus.innerHTML = 'There was a tie :(';
  } else {
    playerXTurn = !playerXTurn;
    if (playerXTurn) {
      gameStatus.innerHTML = `Player X's turn`;
    } else {
      gameStatus.innerHTML = `Player O's turn`;
    }
  }
};

const handleClick = (e) => {
  const classList = e.target.classList;
  if (!gameIsLive || classList[1] === 'o' || classList[1] === 'x') {
    return null;
  }
  if (playerXTurn) {
    classList.add('x');
    gamePlay();
  } else {
    classList.add('o');
    gamePlay();
  }
};

for (const cell of grid) {
  cell.addEventListener('click', handleClick)
}

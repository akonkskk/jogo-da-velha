let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleMove = (cellIndex) => {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementById(`cell-${cellIndex}`).innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('turn').innerText = `Turno do jogador: ${currentPlayer}`;
  }
};

const checkResult = () => {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById('turn').innerText = `Jogador ${board[a]} venceu!`;
      highlightWin(condition);
      return;
    }
  }
  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('turn').innerText = 'Empate!';
  }
};

const highlightWin = (condition) => {
  for (let index of condition) {
    document.getElementById(`cell-${index}`).classList.add('winner');
  }
};


const resetGame = () => {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('turn').innerText = `Turno do jogador: ${currentPlayer}`;
  document.querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('winner'); // Remover a classe 'winner'
    cell.style.backgroundColor = '#fff';
  });
};

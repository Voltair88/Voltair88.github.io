let player = "\u00D7";
let winner = null;
let moves = 0;
let playerX = "#dc685a";
let playerO = "#ecaf4f";
let cells = document.getElementsByClassName("cell");
let winnerText = document.getElementById("winner");
let resetButton = document.getElementById("reset");
let gameEnded = false;

function cellClicked(cell) {
  if (gameEnded) {
    return;
  }
  if (cell.innerHTML === "") {
    cell.innerHTML = player;
    moves++;
    cell.style.backgroundColor = player === "\u00D7" ? playerX : playerO;
    if (player === "○") {
      player = "\u00D7";
    } else {
      player = "○";
    }
  }
  checkWinner();
}

function checkWinner() {
  if (
    checkRow(0, 1, 2) ||
    checkRow(3, 4, 5) ||
    checkRow(6, 7, 8) ||
    checkRow(0, 3, 6) ||
    checkRow(1, 4, 7) ||
    checkRow(2, 5, 8) ||
    checkRow(0, 4, 8) ||
    checkRow(2, 4, 6)
  ) {
    let winner = player === "\u00D7" ? "○" : "\u00D7";
    winnerText.innerHTML = "Player " + winner + " has won!";
    gameEnded = true;
  } else if (moves === 9) {
    winnerText.innerHTML = "It's a tie!";
    gameEnded = true;
  }
}

function checkRow(a, b, c) {
  let cellA = document.getElementById("cell-" + a);
  let cellB = document.getElementById("cell-" + b);
  let cellC = document.getElementById("cell-" + c);
  if (
    cellA.innerHTML === "" ||
    cellB.innerHTML === "" ||
    cellC.innerHTML === ""
  ) {
    return false;
  }
  if (
    cellA.innerHTML === cellB.innerHTML &&
    cellA.innerHTML === cellC.innerHTML
  ) {
    return true;
  }
  return false;
}

function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "white";
  }
  player = "\u00D7";
  winner = null;
  moves = 0;
  gameEnded = false;
  winnerText.innerHTML = "";
}

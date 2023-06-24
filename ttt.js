let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        let cell = document.getElementById('tic-tac-toe-board').children[row].children[col];
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer === 'X' ? 'x-move' : 'o-move');
        if (checkWin(currentPlayer)) {
            setTimeout(() => {
                alert(currentPlayer + ' wins!');
                resetGame();
            }, 100);
        } else if (checkDraw()) {
            setTimeout(() => {
                alert('It\'s a draw!');
                resetGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer = 'X';

    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].classList.remove('x-move', 'o-move');
    }
}


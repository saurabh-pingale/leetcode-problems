/**
 * @param {number} n
 * @return {string[][]}
 */
function isSafe(row, col, board, n) {
    // upper diagonal
    let r = row, c = col;
    while (r >= 0 && c >= 0) {
        if (board[r][c] == "Q") return false;
        r--;
        c--;
    }

    // left side
    r = row, c = col;
    while (c >= 0) {
        if (board[r][c] == "Q") return false;
        c--;
    }

    // lower diagonal
    r = row, c = col;
    while (r < n && c >= 0) {
        if (board[r][c] == "Q") return false;
        r++;
        c--;
    }

    return true;
}

function solve(col, board, solutions, n) {
    if (col == n) {
        solutions.push(board.map(row => row.join("")));
        return;
    }

    for (let row = 0; row < n; row++){
        if (isSafe(row, col, board, n)) {
            board[row][col] = "Q";
            solve(col + 1, board, solutions, n);
            board[row][col] = ".";
        }
    }
}

var solveNQueens = function(n) {
  let solutions = [];
  let board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  solve(0, board, solutions, n);
  return solutions;  
};
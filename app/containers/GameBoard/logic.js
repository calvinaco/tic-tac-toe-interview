import { PLAYER_X, PLAYER_O } from "./constants";

export function rotatePlayer(currentPlayer) {
    return (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
}

export function hasWinner(board) {
    return findWinner(board) !== null;
}

export function findWinner(board) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    for (let i = 0; i < winningLines.length; i += 1) {
        const [a, b, c] = winningLines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

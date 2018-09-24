// Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
function exist(board, word) {
  if (!board) return false;
  const rows = board.length;
  const cols = board[0].length;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (search(board, word, 0, x, y)) return true;
    }
  }
  return false;
}

function search(board, word, currIdx, x, y) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = '#';
  if (x < 0 || x >= rows || y < 0 || y >= cols) return false;
  const letter = word[currIdx];
  if (board[x][y] === letter) {
    if (currIdx === word.length - 1) return true;
    const saved = board[x][y];
    board[x][y] = visited;

    const result =
      search(board, word, currIdx + 1, x + 1, y) ||
      search(board, word, currIdx + 1, x - 1, y) ||
      search(board, word, currIdx + 1, x, y + 1) ||
      search(board, word, currIdx + 1, x, y - 1);

    board[x][y] = saved;

    return result;
  }
  return false;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const test = exist(board, 'ADECCE');
console.log(test);

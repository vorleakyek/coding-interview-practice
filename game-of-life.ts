/**
 * Apply the Game of Life rules to the board in place.
 * @param board - The 2D array representing the Game of Life board, where 1 is a live cell and 0 is a dead cell.
 */

function gameOfLife(board: number[][]): void {
   let rows = board.length; 
   const cols = board[0].length; 

   for (let row=0; row < rows; ++row) {
    for (let col=0; col<cols; ++col) {
        // Initialize live neighbor count; the cell itself is counted and will be subtracted later if alive
        let liveNeighbors = -board[row][col];

        for( let x = row -1; x<=row +1; ++x) {
            // Check if neighbor coordinates are within the board bounds
            for (let y = col - 1; y <= col + 1; ++y) {
                if (x >= 0 && x < rows && y >= 0 && y <cols && board[x][y] > 0) {
                    // Increment live neighbor count if neighbor is alive
                    ++liveNeighbors;
                }
            }
        }
        // Apply the Game of Life rules:
        // 1. Any live cell with fewer than two or more than three live neighbors dies
        if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
            board[row][col] = 2; 
        }

        //2. Any dead cell with exactly three live neighbors becomes a live cell
        if (board[row][col] === 0 && liveNeighbors === 3){
            board[row][col] = -1; 
        }
    }
   } 

   // Finalize the board state by changing marked cells to their new states
        for (let row=0; row <rows; ++row) {
            for (let col=0; col<cols; ++col) {
                if (board[row][col] === 2) {
                    board[row][col] = 0; 
                }

                if (board[row][col] === -1){
                    board[row][col] = 1; 
                }
            }
        }
};

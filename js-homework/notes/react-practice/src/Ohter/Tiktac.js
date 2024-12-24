import React, { useState } from "react";

export default function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isXNext, setIsXNext] = useState(true); 
  const [winner, setWinner] = useState(null); 


  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6], 
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; 
      }
    }

    return null;
  };


  const handleClick = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O"; 
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard); 
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext); 
    }
  };


  const restartGame = () => {
    setBoard(Array(9).fill(null)); 
    setIsXNext(true); 
    setWinner(null); 
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tic Tac Toe</h1>

      <div style={styles.board}>
        {board.map((val, index) => {         
          return (
            <div key={index} style={styles.val} onClick={() => handleClick(index)}>
              {val}
            </div>
          );
        })}
      </div>

      {winner && <h2 style={styles.winner}>Winner: {winner}</h2>}

      <button style={styles.button} onClick={restartGame}>
        RESTART GAME
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#FFFBCC",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "300px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  title: { marginBottom: "20px" },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "5px",
    margin: "0 auto",
    width: "150px",
  },
  val: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    border: "1px solid black",
    cursor: "pointer",
    backgroundColor: "#FFF",
  },
  winner: { marginTop: "15px" },
  button: {
    marginTop: "10px",
    backgroundColor: "#1E90FF",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

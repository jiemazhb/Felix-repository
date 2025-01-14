import React from 'react'

export default function Tictoktos() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [status, setStatus] = useState(true)

  const placeChess = (index) => {
    
    const newArr = [...board]

    newArr[index] = status ? "X" : "O"
    setStatus(!status)
    setBoard(newArr)
    
  }

  return (
    <div style={styles.container}>
      <div style={styles.board}>
        {
          board.map((val,index) => {
            return (
              <div key={index} style={styles.val} onClick={() => placeChess(index)}>{val}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Tictoktos;


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

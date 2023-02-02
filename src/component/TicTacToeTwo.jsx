import React, { useState } from 'react';
import './TicTactToe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState(null);

  const handleClick = index => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
    checkWin();
    checkDraw();
  };

  const renderSquare = index => {
    return (
      <div
        // style={{
        //   width: '30px',
        //   height: '30px',
        //   border: '1px solid black',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  const checkWin = () => {
    const winConditions = [      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameStatus(`${board[a]} wins!`);
        break;
      }
    }
  };

  const checkDraw = () => {
    if (!board.includes(null) && !gameStatus) {
      setGameStatus('Draw');
    }
  };

  return (
    <div>
      <div
        // style={{
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   width: '90px'
        // }}
      >
        {board.map((value, index) => {
          return renderSquare(index);
        })}
      </div>
      {gameStatus && <div>{gameStatus}</div>}
    </div>
  );
};

export default TicTacToe;

import React, { useState } from 'react';
import '../styles/TicTactToe.css'
import cat from '../assets/gato.png'
import dog from '../assets/perro.png'
import Reference from './Reference';
import Swal from 'sweetalert2'

function Square({ value, onClick }) {
    return (
        <div className="square" onClick={onClick}>
            {/* {value} */}
            {value === "X" && <img src={cat} className='x-icon' alt="x icon" />}
            {value === "O" && <img src={dog} className='o-icon' alt="o icon" />}
        </div>
    );
}

function Board({ squares, onClick }) {
    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    };

    return (
        <div className='div-board-general'>


            <div className="tic-tac-toe">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (calculateWinner(squares) || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    const reset = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    const calculateWinner = (squares) => {
        const lines = [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner ${winner}`;
        Swal.fire({
            icon: 'success',
            title:  `player: ${winner} Won`,
            showConfirmButton: true,
          })
          reset()
    } else if (squares.every(square => square)) {
        status = "It's a draw";
        Swal.fire({
            icon: 'warning',
            title:  "It's a draw",
            showConfirmButton: true,
          })
          reset()
    } else {
        status = `Next player: ${xIsNext ? ('X') : 'O'}`;
    }

    return (
        <div>
            <Reference cat={cat} dog={dog} />
            <div>
            </div>
            {winner ? null : (<div className='div-turns-is'>
                {
                    status === "Next player: X" ?
                     (
                        <div className='div-turn-icon' > 
                            <img src={cat} className='x-icon' alt="x icon" /> 
                            <p>Turn</p> 
                        </div>
                    
                     ) : 
                     (
                        <div className='div-turn-icon' >
                             <img src={dog} className='o-icon' alt="o icon" />
                             <p>Turn</p>
                        </div>
                    
                     )
                }
            </div>)}

            <Board squares={squares} onClick={handleClick} />
            <button className="btn-reset-board" onClick={reset}>Start Again</button>
        </div>
    );
}

export default TicTacToe;

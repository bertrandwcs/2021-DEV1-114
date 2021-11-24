import React, { useState } from "react";
import DisplayCells from "../components/DisplayCells";

function TicTacToePage() {
  const indexComponent = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [currentPlayer, setCurrentPlayer] = useState<String>("x");
  const [cells, setCells] = useState(Array(9).fill(""));

  const handleClick = (index: number) => {
    if (cells[index] !== "") {
      return;
    }
    let target = [...cells];

    if (currentPlayer === "x") {
      target[index] = "x";
      setCurrentPlayer("O");
    } else {
      target[index] = "o";
      setCurrentPlayer("x");
    }
    setCells(target);
    console.log(target);
  };

  return (
    <div className="tic-tac-toe-container">
      <h1 data-testid="title">Tic tac toe</h1>
      <p>Player: {currentPlayer}</p>
      <div className="game-grid-container">
        {indexComponent.map((elem) => {
          return (
            <DisplayCells
              index={elem}
              cells={cells}
              currentPlayer={currentPlayer}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToePage;

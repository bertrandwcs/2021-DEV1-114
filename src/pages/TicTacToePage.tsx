import React, { useState } from "react";
import DisplayCells from "../components/DisplayCells";

function TicTacToePage() {
  const indexComponent = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [cells, setCells] = useState(Array(9).fill(""));

  return (
    <div className="tic-tac-toe-container">
      <h1 data-testid="title">Tic tac toe</h1>
      <div className="game-grid-container">
        {indexComponent.map((elem) => {
          return <DisplayCells index={elem} cells={cells} />;
        })}
      </div>
    </div>
  );
}

export default TicTacToePage;

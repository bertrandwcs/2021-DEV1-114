import React, { useState } from "react";
import DisplayCells from "../components/DisplayCells";

function TicTacToePage() {
  /* Array variable to itterate <DisplayCells/> component */
  const indexComponent: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  /* state to get current player */
  const [currentPlayer, setCurrentPlayer] = useState<String>("x");

  /* state to catch player with the selected cell */
  const [cells, setCells] = useState(Array(9).fill(""));

  /* state to catch the winner */
  const [winner, setWinner] = useState<String>();

  /* methode to switch player on click and call checkWinner() function */
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
    checkWinner(target);
    setCells(target);
    console.log(target);
  };

  /*  methode that compare multi selected cells from the player to the modal "possibleWin" */

  const checkWinner = (target: string[]) => {
    const possibleWins: any = {
      column: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      raw: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let possibleWin in possibleWins) {
      possibleWins[possibleWin].forEach((modal: Array<number>) => {
        console.log(modal);
        console.log(target[modal[0]]);
        if (
          target[modal[0]] === "" ||
          target[modal[1]] === "" ||
          target[modal[2]] === ""
        ) {
        } else if (
          target[modal[0]] === target[modal[1]] &&
          target[modal[1]] === target[modal[2]]
        ) {
          console.log("win");
          setWinner(target[modal[0]]);
        }
      });
    }
  };

  return (
    <div className="tic-tac-toe-container">
      <h1 data-testid="title">Tic tac toe</h1>
      <p>Player: {currentPlayer}</p>
      <span>{winner && <p>{winner} win!</p>}</span>
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

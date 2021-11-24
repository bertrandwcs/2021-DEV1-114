import React from "react";

const DisplayCells = ({ index, cells, onClick }: any) => {
  console.log(cells[index]);
  return (
    <div className="cells-container">
      <div className="game-grid-container">
        <div
          className={`cell player-${cells[index]}-color`}
          onClick={() => onClick(index)}
        >
          {cells[index]}
        </div>
      </div>
    </div>
  );
};
export default DisplayCells;

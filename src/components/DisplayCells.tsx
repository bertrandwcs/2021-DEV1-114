import React from "react";

const DisplayCells = ({ index, cells }: any) => {
  return (
    <div className="cells-container">
      <div className="game-grid-container">
        <div className="cell">{cells[index]}</div>
      </div>
    </div>
  );
};
export default DisplayCells;

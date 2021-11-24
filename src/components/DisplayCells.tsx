import React from "react";

const DisplayCells = ({ index, cells, onClick }: any) => {
  return (
    <div className="cells-container">
      <div className="game-grid-container">
        <div className="cell" onClick={() => onClick(index)}>
          {cells[index]}
        </div>
      </div>
    </div>
  );
};
export default DisplayCells;

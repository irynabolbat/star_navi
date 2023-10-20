import { useContext, useEffect, useState } from "react";
import "./GameDesk.css";
import { AppContext } from "../../context";
import { Cell } from "./Cell";

export const GameDesk = () => {
  const { selectedMode } = useContext(AppContext);
  const [activeCells, setActiveCells] = useState<string[]>([]);

  useEffect(() => {
    setActiveCells([])
  }, [selectedMode]);

  if (!selectedMode) {
    return null;
  }
  const fieldSize = selectedMode.field;
  const numRows = Math.sqrt(fieldSize + 1);
  const numCols = Math.sqrt(fieldSize + 1);

  const grid = Array.from({ length: numRows }).map(() =>
    Array.from({ length: numCols })
  );

  return (
    <div className="game_desk">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((_, colIndex) => (
            <Cell 
              key={colIndex} 
              curRow={rowIndex + 1} 
              curCol={colIndex + 1} 
              active={activeCells}
              setActive={setActiveCells}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

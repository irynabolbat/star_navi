import { useContext } from "react";
import "./GameDesk.css";
import { AppContext } from "../../context";

type Props = {
  curRow: number,
  curCol: number,
  active: string[]
  setActive: React.Dispatch<React.SetStateAction<string[]>>
}

export const Cell:React.FC<Props> = ({ curRow, curCol, active, setActive }) => {
  const { squares, setSquares } = useContext(AppContext);

  const currentId = `${curRow}_${curCol}`;
  const isActive = active.includes(currentId);

  const handleMouseEnter = () => {
    if (isActive) {
      setActive((prevState) => prevState.filter(state => state !== currentId));
      setSquares(squares.filter((square) => square.row !== curRow || square.col !== curCol));
    } else {
      setActive((prevState) => [...prevState, currentId]);
      setSquares([...squares, { row: curRow, col: curCol }]);
    }
  };

  return (
    <div
      className={`cell ${isActive ? 'blue' : 'white'}`}
      onMouseEnter={handleMouseEnter}
    />
  )
}

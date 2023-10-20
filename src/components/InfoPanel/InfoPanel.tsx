import { useContext } from "react";
import "./InfoPanel.css";
import { AppContext } from "../../context";

export const InfoPanel = () => {
  const { squares } = useContext(AppContext);

  return (
    <div>
      <h1>Hover squares</h1>
      <ul className="info_list">
        {squares.map(({row, col}) => (
          <li key={`square-row ${row} square-col ${col}`} className="info_item">
            {`row ${row} col ${col}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
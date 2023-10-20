/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import "./Select.css";

type Props = {
  loading: boolean,
}

export const Select:React.FC<Props> = ({ loading }) => {
  const { modes, setModes, setCurrentMode } = useContext(AppContext);

  useEffect(() => {
    fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
      .then((response) => response.json())
      .then((data) => setModes(data))
      .catch((error) => {
        throw new Error('Error:', error)
      });
  }, []);

  const selectCurrentMode = (selectedModeField: string) => {
    const selected = modes.find(mode => mode.field === +selectedModeField);

    if (selected) {
      setCurrentMode(selected);
    }
  }

  return (
    <select 
      name="mode" 
      defaultValue="0"
      onChange={(event) => selectCurrentMode(event.target.value)}
      disabled={loading}
      className="select"
    >
      <option value="0" disabled>Pick mode</option>
      {modes.map(mode => (
        <option key={mode.id} value={mode.field}>
          {mode.name}
        </option>
      ))}
    </select>
  )
}
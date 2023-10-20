import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Select } from "./components/Select/Select";
import Button from 'react-bootstrap/Button';
import { AppContext } from './context';
import { GameDesk } from './components/GameDesk/GameDesk';
import { InfoPanel } from './components/InfoPanel/InfoPanel';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setSquares, setSelectedMode, currentMode } = useContext(AppContext);

  const handleStart = () => {
    setIsGameStarted(true);
    setSquares([]);
    setSelectedMode(currentMode);
  }

  return (
    <div className='game_wrapper'>
      <div className='select_container'>
        <Select loading={isLoading} />
        <Button variant="primary" onClick={handleStart}>START</Button> 
      </div>

      <div className='game_container'>
        {isGameStarted && <GameDesk />}
        {isLoading && <p>Loading...</p>}
        {isGameStarted && <InfoPanel />}
      </div>
    </div>
  );
}

export default App;

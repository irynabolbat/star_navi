import { ReactNode, createContext, useMemo, useState } from "react";
import { Mode } from "./types/mode";
import { Square } from "./types/square";

type AppContextType = {
  modes: Mode[],
  setModes: (modes: Mode[]) => void,
  selectedMode: Mode | null,
  setSelectedMode: (mode: Mode | null) => void,
  currentMode: Mode | null,
  setCurrentMode: (mode: Mode | null) => void,
  squares: Square[],
  setSquares: (squares: Square[]) => void,
};

const defaultValue: AppContextType = {
  modes: [],
  setModes: () => {},
  selectedMode: null,
  setSelectedMode: () => {},
  currentMode: null,
  setCurrentMode: () => {},
  squares: [],
  setSquares: () => {},
};

export const AppContext = createContext(defaultValue);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const [currentMode, setCurrentMode] = useState<Mode | null>(null);
  const [squares, setSquares] = useState<Square[]>([]);

  const value = useMemo(() => ({ 
    modes, setModes, 
    selectedMode, setSelectedMode,
    currentMode, setCurrentMode,
    squares, setSquares,
  }), [
    modes, setModes, 
    selectedMode, setSelectedMode, 
    currentMode, setCurrentMode,
    squares, setSquares,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
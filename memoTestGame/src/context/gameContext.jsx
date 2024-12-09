import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [mode, setMode] = useState('single');
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (selectedMode, selectedDifficulty) => {
    setMode(selectedMode);
    setDifficulty(selectedDifficulty);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  return (
    <GameContext.Provider value={{ difficulty, mode, gameStarted, startGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
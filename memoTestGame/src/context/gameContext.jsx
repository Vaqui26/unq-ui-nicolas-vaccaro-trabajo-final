import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [mode, setMode] = useState('single');
  const [gameState, setGameState] = useState('Menu');

  const startGame = (selectedMode, selectedDifficulty) => {
    setMode(selectedMode);
    setDifficulty(selectedDifficulty);
    setGameState('Start');
  };

  const resetGame = () => {
    setGameState('Menu');
  };

  const winGame = () => {
    setGameState('Win');
  }

  return (
    <GameContext.Provider value={{ difficulty, mode, gameState, startGame, resetGame, winGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
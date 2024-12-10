import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('Facil');
  const [mode, setMode] = useState('single');
  const [gameState, setGameState] = useState('Menu');
  const [playerWin, setPlayerWin] = useState(1)
  const [score, setScore] = useState(0)

  const startGame = (selectedMode, selectedDifficulty) => {
    setMode(selectedMode);
    setDifficulty(selectedDifficulty);
    setScore(0);
    setGameState('Start');
  };

  const resetGame = () => {
    setGameState('Menu');
  };

  const winGame = () => {
    setGameState('Win');
  }
  const setWinGame = (score1,score2) =>{
    if(score1 > score2){
      setScore(score1);
      setPlayerWin(1);
    }else{
      setScore(score2);
      setPlayerWin(2);
    }
    setGameState('Win');

  }

  return (
    <GameContext.Provider value={{ 
      difficulty, 
      mode, 
      gameState, 
      score,
      playerWin, 
      startGame, resetGame, winGame, setWinGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
import React from 'react';
import Menu from './components/Menu';
import GameBoard from './components/GameBoard';
import { useGameContext } from './context/gameContext';

const App = () => {
  const { gameStarted } = useGameContext();

  return (
    <>
      {gameStarted ? <GameBoard /> : <Menu />}
    </>
      
  );
};

export default App;

import React from 'react';
import Menu from './components/Menu';
import GameBoard from './components/GameBoard';
import { useGameContext } from './context/gameContext';

const App = () => {
  const { gameStarted } = useGameContext();

  return (
    <div className="App">
      {gameStarted ? <GameBoard /> : <Menu />}
    </div>
  );
};

export default App;

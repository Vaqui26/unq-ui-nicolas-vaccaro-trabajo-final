import React from 'react';
import Menu from './components/Menu';
import GameBoard from './components/GameBoard';
import WinScreen from './components/WinScreen';
import { useGameContext } from './context/gameContext';

const App = () => {
  const { gameState } = useGameContext();

  return (
    <>
      {gameState === 'Menu' ? <Menu/> : ''}
      {gameState === 'Start' ? <GameBoard/> : ''}
      {gameState === 'Win' ? <WinScreen/> : ''}
    </>
      
  );
};

export default App;

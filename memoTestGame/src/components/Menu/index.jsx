import React, { useState } from 'react';
import { useGameContext } from '../../context/gameContext';
import { BackGround, ContainerMenu, Title,MiniTitle, Button, ButtonStart} from './mixins'

const Menu = () => {
    const { startGame } = useGameContext();
    const [mode, setMode] = useState('single');
    const [difficulty, setDifficulty] = useState('easy');
  
    return (
      <BackGround>
        <ContainerMenu>
        <Title>MemoGame</Title>
          <MiniTitle>Modo de Juego</MiniTitle>
            <Button active={mode === 'single'} onClick={() => setMode('single')}>Un jugador</Button>
            <Button active={mode === 'multiplayer'} onClick={() => setMode('multiplayer')}>Dos jugadores</Button>
          <MiniTitle>Dificultad</MiniTitle>
            <Button active={difficulty === 'easy'} onClick={() => setDifficulty('easy')}>Fácil</Button>
            <Button active={difficulty === 'medium'} onClick={() => setDifficulty('medium')}>Medio</Button>
            <Button active={difficulty === 'hard'} onClick={() => setDifficulty('hard')}>Difícil</Button>
          <ButtonStart onClick={() => startGame(mode, difficulty)}>Iniciar Juego</ButtonStart>
        </ContainerMenu>
      </BackGround>
    );
  };
  
  export default Menu;
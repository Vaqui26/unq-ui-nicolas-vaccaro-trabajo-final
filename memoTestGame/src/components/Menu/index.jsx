import React, { useState } from 'react';
import { useGameContext } from '../../context/gameContext';
import { Container, Title, Button} from './mixins'

const Menu = () => {
    const { startGame } = useGameContext();
    const [mode, setMode] = useState('single');
    const [difficulty, setDifficulty] = useState('easy');
  
    return (
      <Container>
        <Title>MemoGame</Title>
  
        <h2>Modo de Juego</h2>
        <Button active={mode === 'single'} onClick={() => setMode('single')}>Un jugador</Button>
        <Button active={mode === 'multiplayer'} onClick={() => setMode('multiplayer')}>Dos jugadores</Button>
  
        <h2>Dificultad</h2>
        <Button active={difficulty === 'easy'} onClick={() => setDifficulty('easy')}>Fácil</Button>
        <Button active={difficulty === 'medium'} onClick={() => setDifficulty('medium')}>Medio</Button>
        <Button active={difficulty === 'hard'} onClick={() => setDifficulty('hard')}>Difícil</Button>
  
        <Button onClick={() => startGame(mode, difficulty)}>Iniciar Juego</Button>
      </Container>
    );
  };
  
  export default Menu;
import React, { useEffect, useState } from 'react';
import Card from '../Card/index.jsx';
import { useGameContext } from '../../context/gameContext.jsx';
import { suffleArray, duplicateArrayCards, setBodyCards,} from '../../utils/dataCard.js';
import { Container, Grid, Title, ButtonBack, ScoreBox, ScoreBody, PlayerName, PlayerScore, TurnIndicator} from './mixins.js';
import BackGround from '../BackGround/';


const GameBoard = () => {
    const { difficulty, resetGame, winGame, mode, setWinGame} = useGameContext();
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [isDisabled, setDisabled] = useState(false);
    const [scores, setScores] = useState({ player1: 0, player2: 0 });
    const [turn, setTurn] = useState(1);
  
    useEffect(() => {
      const cardCount = difficulty === 'Facil' ? 8 : difficulty === 'Medio' ? 18 : 32;
      const duplicateCards = duplicateArrayCards(cardCount);
      const newCards = suffleArray(duplicateCards);
      setCards(setBodyCards(newCards));
    }, []);

    const handleCardClick = (id) => {

      if(isDisabled) return;

      const [currentCard] = cards.filter(card => card.id === id);

      if(!currentCard.flipped && !currentCard.matched){
          currentCard.flipped = true;

          const newFlippedCards = [...flippedCards, currentCard]
          setFlippedCards(newFlippedCards)

          if(newFlippedCards.length === 2){
              setDisabled(true)
              const [firstCard, secondCard] = newFlippedCards

              if(firstCard.alt === secondCard.alt){
                  firstCard.matched = true;
                  secondCard.matched = true;
                  setDisabled(false);
                  setScores((prevScores) => ({
                    ...prevScores,
                    [`player${turn}`]: prevScores[`player${turn}`] + 1,
                  }));
              }else{
                  setTimeout(() =>{
                      firstCard.flipped = false;
                      secondCard.flipped = false;
                      setCards(cards);
                      setDisabled(false);
                      setTurn(turn === 1 ? 2 : 1);
                  }, 900);
              }
              setFlippedCards([])
          }
          setCards(cards)
      }
      if(cards.every(card => card.matched)){
          setDisabled(true);
          if(mode === 'multiplayer'){
            setWinGame(scores.player1,scores.player2);
          }else{
            winGame();
          }
          
      }
      
  }
    return (
      <>
        <BackGround>
        <Container>
        { mode === 'multiplayer' ? 
        <ScoreBody >
          <ScoreBox>
          <PlayerScore>Puntaje</PlayerScore>
          <PlayerName>Jugador1 : {scores.player1}</PlayerName>
          <PlayerName>Jugador2 : {scores.player2}</PlayerName>
          </ScoreBox>
          <TurnIndicator>
          <p>Turno de : Jugador{turn}</p>
          </TurnIndicator>
        </ScoreBody>
        : <Title>Single Game</Title>
        }
        <Grid lengthCards={cards.length}>
          {cards.map((card, index) => (
            <Card key={index} card={card} handleCardClick= {handleCardClick}/>
          ))}
        </Grid>
        </Container>
        <ButtonBack onClick={() => resetGame()}>Volver al Menu</ButtonBack>
      </BackGround>
      </>
      
    );
  };
  
  export default GameBoard;
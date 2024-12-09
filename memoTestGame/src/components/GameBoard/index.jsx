import React, { useEffect, useState } from 'react';
import Card from '../Card/index.jsx';
import { useGameContext } from '../../context/gameContext.jsx';
import { suffleArray, duplicateArrayCards, setBodyCards} from '../../utils/dataCard.js';
import { Container, Grid, Title, ButtonBack } from './mixins.js';
import BackGround from '../BackGround/';


const GameBoard = () => {
    const { difficulty, resetGame, winGame} = useGameContext();
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [isDisabled, setDisabled] = useState(false);
  
    useEffect(() => {
      const cardCount = difficulty === 'easy' ? 8 : difficulty === 'medium' ? 18 : 32;
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

              if(firstCard.img === secondCard.img){
                  firstCard.matched = true;
                  secondCard.matched = true;
                  setDisabled(false);
              }else{
                  setTimeout(() =>{
                      firstCard.flipped = false;
                      secondCard.flipped = false;
                      setCards(cards);
                      setDisabled(false);
                  }, 900);
              }
              setFlippedCards([])
          }
          setCards(cards)
      }
      if(cards.every(card => card.matched)){
          setDisabled(true);
          winGame()
      }
      
  }
    return (
      <BackGround>
        <Container>
        <Title>Memo Game</Title>
        <Grid lengthCards={cards.length}>
          {cards.map((card, index) => (
            <Card key={index} card={card} handleCardClick= {handleCardClick}/>
          ))}
        </Grid>
        </Container>
        <ButtonBack onClick={() => resetGame()}>Volver al Menu</ButtonBack>
      </BackGround>
    );
  };
  
  export default GameBoard;
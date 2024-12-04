import { useEffect, useState } from "react";
import { BoardContainer, Title, GridContainer, Button, ScreenModal} from './mixins'
import {imagesCard, suffleArray} from '../../dataCard'
import Card from '../Card'
import Modal from '../Modal'


const component = () => {

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    
    const createBoard = () => {
        const duplicateCards = imagesCard.flatMap((img, i) => {
            const duplicate = {
                ...img,
                id : img.id + imagesCard.length
            }
            return [img, duplicate]
        })

        const newCards = suffleArray(duplicateCards)
        const cards = newCards.map( card => {
            return {
                 ...card, 
                 flipped: false,
                 matched: false, 
            }
        })
        setCards(cards) 
    }

    useEffect(() => {
        createBoard();
    },[])

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
                    setScore(score + 1);
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
            setGameOver(true);
            setDisabled(true);
        }
        
    }
    const handleNewGame = () => {
        setCards([]);
        createBoard();
        setScore(0);
        setGameOver(false);
        setDisabled(false);
    }

    return(
        <>
            {gameOver && (<ScreenModal/>)}
            
          <BoardContainer>
                <Title>Memorie Game</Title>
                <GridContainer>
                    {cards.map(card => (
                        <Card card= {card} key= {card.id} handleCardClick= {handleCardClick}/>
                        ))
                    }
                </GridContainer>
                <Button onClick={handleNewGame}>Reset</Button>
                    
            <Modal gameOver={gameOver} setGameOver={setGameOver} score={score} handleNewGame={handleNewGame}/>
           </BoardContainer>
        </>
                
    );
}

export default component;
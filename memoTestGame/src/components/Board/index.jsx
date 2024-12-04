import { useEffect, useState } from "react";
import { BoardContainer, Title, GridContainer} from './mixins'
import {imagesCard} from '../../dataCard'
import Card from '../Card'

const suffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };
const component = () => {

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    
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
        if(!loading){
            setLoading(true);
            createBoard();
        }
        setLoading(false);
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
                    setDisabled(false)
                }else{
                    setTimeout(() =>{
                        firstCard.flipped = false;
                        secondCard.flipped = false;
                        setCards(cards);
                        setDisabled(false) 
                    }, 750);
                }
                //No sirve poner el set afuera, ya que el timeout se ejecuta por el tiempo. 
                setFlippedCards([])
            }
            setCards(cards)
        }
        
    }

    return(
        <BoardContainer>
            <Title>MemorieTest</Title>
            <GridContainer>
                {cards.map(card => (
                    <Card card= {card} key= {card.id} handleCardClick= {handleCardClick}/>
                    ))
                }
            </GridContainer>
        </BoardContainer>        
    );
}

export default component;
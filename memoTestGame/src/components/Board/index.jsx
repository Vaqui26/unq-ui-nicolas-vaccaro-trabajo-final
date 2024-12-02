import { useEffect, useState } from "react";
import { BoardContainer, Title, GridContainer} from './mixins'
import {imagesCard} from '../../dataCard'
import Card from '../Card'

const suffleArray = array => {
    for (let i = array.lenght -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
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
                id: img.id + imagesCard.lenght
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
    console.log(cards);


    return(
        <BoardContainer>
            <Title>MemorieTest</Title>
            <GridContainer>
                {cards.map(card => (
                    <Card card= {card} key= {card.id} />
                    ))
                }
            </GridContainer>
        </BoardContainer>        
    );
}

export default component;
import React from 'react'
import {ContainerBoxModal, Button, ScoreBox, Letters, ExitButton,Congratulations} from './mixins'

export const component = ({gameOver, setGameOver, score, handleNewGame}) => {
    return (
        <>
        { gameOver ? 
            <ContainerBoxModal gameOver={gameOver}>
                <ExitButton onClick={() => setGameOver(false)}>X</ExitButton>
                <Congratulations>Congratulations!!!</Congratulations>
                <ScoreBox>
                    <Letters>Score :</Letters>
                    <Letters>{score}</Letters>
                </ScoreBox>
            <Button onClick={handleNewGame}>New Game</Button>
            </ContainerBoxModal> : 
            <div></div>
        }
        </>
    )

};

export default component
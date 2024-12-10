import React from 'react';
import { useGameContext } from '../../context/gameContext';
import { Title, TextScore, Image, ScoreContainer, ButtonBack} from './mixins'
import WinImage from '../../assets/images/finishWin.png'
import BackGround from '../BackGround';

const WinScreen = () => {

    const { resetGame, mode, playerWin, score, difficulty } = useGameContext();

    return(
        
        <BackGround>
            <Title>Felicidades!!!</Title>
            <Image src={WinImage} alt={'win.alt'}/>
            <ScoreContainer>
            { mode === 'multiplayer' ? 
            <>  
                <TextScore>Ganador : Jugador{playerWin}</TextScore>
                <TextScore>Puntuacion Total : {score}</TextScore>
            </>
            :
            <TextScore>Ganaste el nivel {difficulty}</TextScore>
            }
            </ScoreContainer>
            <ButtonBack onClick={() => resetGame()}>Volver al Menu</ButtonBack>
        </BackGround>
        
    );
};
export default WinScreen;
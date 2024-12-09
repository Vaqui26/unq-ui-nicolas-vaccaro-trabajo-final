import React from 'react';
import { useGameContext } from '../../context/gameContext';
import { Title, TextScore, Image, ScoreContainer, ButtonBack} from './mixins'
import WinImage from '../../assets/images/finishWin.png'
import BackGround from '../BackGround';

const WinScreen = () => {

    const { resetGame, mode } = useGameContext();

    return(
        
        <BackGround>
            <Title>Felicidades!!!</Title>
            <Image src={WinImage} alt={'win.alt'}/>
            <ScoreContainer>
            { mode === 'multiplayer' ? 
            <>  
                <TextScore>Puntuacion:</TextScore>
                <TextScore>8</TextScore>
            </>
            :
            <TextScore>Ganaste SinglePlayer</TextScore>
            }
            </ScoreContainer>
            <ButtonBack onClick={() => resetGame()}>Volver al Menu</ButtonBack>
        </BackGround>
        
    );
};
export default WinScreen;
import { CardContainer, Card, Image } from "./mixins";
import FrontCard from '../../assets/frontCard.svg'

const component = ({card, handleCardClick}) => {
    return (
     <CardContainer onClick={() => handleCardClick(card.id)}>
        { !card.flipped ? 
        <Card>
            <Image src={FrontCard} alt={'frontCard'}></Image>
        </Card>
        :
        <Card>
            <Image src={card.img} alt={card.alt}></Image>
        </Card>
        }
     </CardContainer>

        
    );
  };

export default component;
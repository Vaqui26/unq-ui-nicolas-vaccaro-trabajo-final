import { useState } from "react";
import { CardContainer, Image } from "./mixins";

const component = ({card}) => {

    return(
        <CardContainer>
            <div>
                <Image src={card.img} alt={card.alt}></Image>
            </div>
        </CardContainer>
    );
}

export default component;
import Bat from '../assets/animalsSVG/bat.svg'
import Beetle from '../assets/animalsSVG/beetle.svg'
import Butterfly from '../assets/animalsSVG/butterfly.svg'
import Camel from '../assets/animalsSVG/camel.svg'
import Cat from '../assets/animalsSVG/cat.svg'
import Chameleon from '../assets/animalsSVG/chameleon.svg'
import Cobra from '../assets/animalsSVG/cobra.svg'
import Cow from '../assets/animalsSVG/cow.svg'
import Crab from '../assets/animalsSVG/crab.svg'
import Crocodile from '../assets/animalsSVG/crocodile.svg'
import Dog from '../assets/animalsSVG/dog.svg'
import Duck from '../assets/animalsSVG/duck.svg'
import Elephant from '../assets/animalsSVG/elephant.svg'
import Fish from '../assets/animalsSVG/fish.svg'
import Frog from '../assets/animalsSVG/frog.svg'
import Hippo from '../assets/animalsSVG/hippo.svg'
import Jiraffe from '../assets/animalsSVG/jiraffe.svg'
import kangaroo from '../assets/animalsSVG/kangaroo.svg'
import Lion from '../assets/animalsSVG/lion.svg'
import Monkey from '../assets/animalsSVG/monkey.svg'
import Mouse from '../assets/animalsSVG/mouse.svg'
import Octopus from '../assets/animalsSVG/octopus.svg'
import Penguin from '../assets/animalsSVG/penguin.svg'
import Rhino from '../assets/animalsSVG/rhino.svg'
import Rooster from '../assets/animalsSVG/rooster.svg'
import Shark from '../assets/animalsSVG/shark.svg'
import Sheep from '../assets/animalsSVG/sheep.svg'
import Snake from '../assets/animalsSVG/snake.svg'
import Spider from '../assets/animalsSVG/spider.svg'
import Tiger from '../assets/animalsSVG/tiger.svg'
import Turtle from '../assets/animalsSVG/turtle.svg'
import Whale from '../assets/animalsSVG/whale.svg'

export const imagesCard = [
    {
        id: 1,
        img: Bat,
        alt: "Bat"
    },
    {
        id: 2,
        img: Beetle,
        alt: "Beetle"
    },
    {
        id: 3,
        img: Butterfly,
        alt: "Butterfly"
    },
    {
        id: 4,
        img: Camel,
        alt: "Camel"
    },
    {
        id: 5,
        img: Cat,
        alt: "Cat"
    },
    {
        id: 6,
        img: Chameleon,
        alt: "Chameleon"
    },
    {
        id: 7,
        img: Cobra,
        alt: "Cobra"
    },
    {
        id: 8,
        img: Cow,
        alt: "Cow"   
    }
    ,
    {
        id: 9,
        img: Crab,
        alt: "Crab"   
    }
    ,
    {
        id: 10,
        img: Crocodile,
        alt: "Crocodile"   
    }
    ,
    {
        id: 11,
        img: Dog,
        alt: "Dog"   
    }
    ,
    {
        id: 12,
        img: Duck,
        alt: "Duck"   
    }
    ,
    {
        id: 13,
        img: Elephant,
        alt: "Elephant"   
    }
    ,
    {
        id: 14,
        img: Fish,
        alt: "Fish"   
    }
    ,
    {
        id: 15,
        img: Frog,
        alt: "Frog"   
    }
    ,
    {
        id: 16,
        img: Hippo,
        alt: "Hippo"   
    }
    ,
    {
        id: 17,
        img: Jiraffe,
        alt: "Jiraffe"   
    }
    ,
    {
        id: 18,
        img: kangaroo,
        alt: "kangaroo"   
    }
    ,
    {
        id: 19,
        img: Lion,
        alt: "Lion"   
    }
    ,
    {
        id: 20,
        img: Monkey,
        alt: "Monkey"   
    }
    ,
    {
        id: 21,
        img: Mouse,
        alt: "Mouse"   
    }
    ,
    {
        id: 22,
        img: Octopus,
        alt: "Octopus"   
    }
    ,
    {
        id: 23,
        img: Penguin,
        alt: "Penguin"   
    }
    ,
    {
        id: 24,
        img: Rhino,
        alt: "Rhino"   
    }
    ,
    {
        id: 25,
        img: Rooster,
        alt: "Rooster"   
    }
    ,
    {
        id: 26,
        img: Shark,
        alt: "Shark"   
    }
    ,
    {
        id: 27,
        img: Sheep,
        alt: "Sheep"   
    }
    ,
    {
        id: 28,
        img: Snake,
        alt: "Snake"   
    },
    {
        id: 29,
        img: Spider,
        alt: "Spider"   
    },
    {
        id: 30,
        img: Tiger,
        alt: "Tiger"   
    },
    {
        id: 31,
        img: Turtle,
        alt: "Turtle"   
    },
    {
        id: 32,
        img: Whale,
        alt: "Whale"   
    }

];

export const duplicateArrayCards = (limit) => {

    const limitArray = imagesCard.slice(0, limit);

    const duplicateCards = limitArray.flatMap((img, i) => {
        const duplicate = {
            ...img,
            id : img.id + limitArray.length
        }
        return [img, duplicate]
    })
    return duplicateCards
}

export const suffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

export const setBodyCards = (array) =>{

    const cards = array.map( card => {
        return {
             ...card, 
             flipped: false,
             matched: false, 
        }
    })
    return cards;
}
export default imagesCard;
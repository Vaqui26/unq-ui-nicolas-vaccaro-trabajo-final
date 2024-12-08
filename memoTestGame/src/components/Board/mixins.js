import styled from 'styled-components'

const BoardContainer = styled.div`
display  : flex ;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: midnightblue;
    font-size: 20px;
`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
const Button = styled.button`
    width: 100px;
    height: 70px;
    border-radius: 16px;
    background-color: royalblue;
    color: white;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);}
`
const ScreenModal = styled.div`
    position: fixed;
    inset: 0;
    background-color: black;
    opacity: 0.5;
    z-index: -10;
`
export {BoardContainer, Title, GridContainer, Button, ScreenModal}
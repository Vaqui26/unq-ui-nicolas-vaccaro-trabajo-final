import styled from 'styled-components'

const BoardContainer = styled.div`  
    margin: 10px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: midnightblue;
    font-size: 20px;
`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

`
export {BoardContainer, Title, GridContainer}
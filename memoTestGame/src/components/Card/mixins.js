import styled from 'styled-components'

const CardContainer = styled.div`
    cursor: pointer;
    border-radius: 6px;
    background-color: #c3e9c1;
    &:hover {
    transform: scale(1.05);
  }
`
const Card = styled.div`
    width: 50px;
    height: 50px;
    padding: 6px;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
`
export {CardContainer,Card, Image }
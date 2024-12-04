import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    gap: 10px;
    padding: 10px;
    &:hover {
    transform: scale(1.05);
  }
`
const Card = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    align-items: center;    
`
const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
`
export {CardContainer,Card, Image }
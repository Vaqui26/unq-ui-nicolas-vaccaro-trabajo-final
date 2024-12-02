import styled from 'styled-components'

const CardContainer = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
    gap: 10px;
    padding: 10px;
`
const Image = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
`

export {CardContainer, Image}
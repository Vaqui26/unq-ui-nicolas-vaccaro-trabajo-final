import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ lengthCards }) => 
    `repeat(${Math.ceil(Math.sqrt(lengthCards))}, 1fr)`};
  gap: 10px;
`;

export {Container, Grid}
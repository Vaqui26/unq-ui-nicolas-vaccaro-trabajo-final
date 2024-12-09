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

const Title = styled.h1`
  font-size: 35px;
  color: #4db32c;
`;

const ButtonBack = styled.button`
  margin: 10px;
  padding: 15px 30px;
  background-color: #4db32c;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ee1717;
  }
`
export {Container, Grid, Title, ButtonBack}
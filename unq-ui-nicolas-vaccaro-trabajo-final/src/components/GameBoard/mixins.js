import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ lengthCards }) => 
    `repeat(${Math.ceil(Math.sqrt(lengthCards))}, 1fr)`};
  gap: 10px;
  padding: 5px;
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
const ScoreBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #59e560; 
  border-radius: 12px;
  padding: 5px;
  width: 500px;
  height: 150px;
`;
const ScoreBox = styled.div`
  background-color: #85ff8b;
  border-radius: 12px;
  padding-left: 10px;
  padding-right: 10px;
`
const PlayerName = styled.p`
  font-size: 20px;
  font-weight: 5px;
`;

const PlayerScore = styled.p`
  font-size: 20px;
`;
const TurnIndicator = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcc00;
  color: #2c3e50;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center; 
`;
export {Container, Grid, Title, ButtonBack, ScoreBody, ScoreBox, PlayerName, PlayerScore, TurnIndicator}
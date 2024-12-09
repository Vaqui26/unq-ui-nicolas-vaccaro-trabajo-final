import styled from 'styled-components'
import Fondo from '../../assets/images/fondoMemoGame.jpg'

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-image: url(${Fondo});
  background-size: cover;
`
const ContainerMenu = styled.div`
  text-align: center;
  background-color: white;
  width: 600px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #313032;
`;
const MiniTitle = styled.h1`
  font-size: 30px;
  color: #313032;
`;
const Button = styled.button`
  margin: 10px;
  padding: 15px 20px;
  background-color: ${(props) => (props.active ? '#28a745' : '#007bff')};
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const ButtonStart = styled.button`
  margin: 10px;
  padding: 15px 30px;
  background-color: #28a745;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff8333;
  }
`

export { BackGround, ContainerMenu, Title, MiniTitle, Button, ButtonStart}
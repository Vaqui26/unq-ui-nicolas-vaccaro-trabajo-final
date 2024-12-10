import styled from 'styled-components'

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

export { Title, MiniTitle, Button, ButtonStart}
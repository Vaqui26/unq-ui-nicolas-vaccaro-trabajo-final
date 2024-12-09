import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Button = styled.button`
  margin: 10px;
  padding: 15px 20px;
  background-color: ${(props) => (props.active ? '#28a745' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export { Container, Title, Button}
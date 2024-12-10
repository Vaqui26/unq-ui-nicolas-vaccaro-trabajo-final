import styled from 'styled-components'
import Image from '../../assets/images/fondoMemoGame.jpg'

const ImageBackGround = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-image: url(${Image});
  background-size: cover;
`
const Container = styled.div`
  text-align: center;
  background-color: white;
  width: 600px;
  height: 800px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {ImageBackGround, Container}
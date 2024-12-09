import styled from "styled-components";

const Title = styled.p`
    font-family: 'Poppins';
    font-size: 50px;
    color : #65dc35;
`
const TextScore = styled.p`
    font-family: 'Monterray';
    font-size: 25px;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`
const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
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
export { Title, TextScore, Image, ScoreContainer, ButtonBack}
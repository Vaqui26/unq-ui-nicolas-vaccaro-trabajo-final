import styled from "styled-components";

const Title = styled.p`
    font-size: 50px;
    color : #2bc41c;
`
const TextScore = styled.p`
    font-weight: 400;
    line-height: 28px;
    font-size: 30px;
`
const Image = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`
const ScoreContainer = styled.div`
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
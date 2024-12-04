import styled from 'styled-components'

const ContainerBoxModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  background-color: black;
  width: 250px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
  border-radius: 10px;
`
const Button = styled.button`
    width: 100px;
    height: 40px;
    font-size: 12px;
    background-color: yellow;
    color: black;
`
const ScoreBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
` 
const Letters = styled.p`
    color: white;
    font-size: 15px;
`
const ExitButton = styled.button`
color:white;
background-color: red;
position: absolute;
right: 0;
top: 0;
`
const Congratulations = styled.p`
    font-size: 20px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export { ContainerBoxModal,Button, ScoreBox, Letters, ExitButton,Congratulations}
import './App.css';
import { useState, useRef } from "react";
import styled, { css } from 'styled-components'

const App = () => {
  const [displayValue, setDisplayValue] = useState([]);

  const costValue = useRef(0);
  const inputValue = useRef("");

  const handleClick = () => {
    setDisplayValue((list) => [
      ...list,
      { name: inputValue.current, value: costValue.current },
    ])
  }

  return (
    <Body>
        <Hone>Add Expense</Hone>
        <Ptags>Name</Ptags>
        <InputFields onChange={(event) => {
							inputValue.current = event.target.value;
						}} ></InputFields>
        <Ptags>Cost</Ptags>
        <InputFields onChange={(event) => {
							costValue.current = event.target.value;
						}}></InputFields>
        <AddButton type="button" onClick= {() => handleClick()}
				    >Add</AddButton>
            <Hone>Stats</Hone>
            <Ptags>Sum: {displayValue.reduce(
              (previousValue, currentValue) =>
                previousValue + Number(currentValue.value),
              0
            )}
            </Ptags>
            <Ptags>Count: {displayValue.length}</Ptags>
          <Position>
          {displayValue.map((listItem, index) => (
        <Container
        key={index}
          onClick={() => {
            const displayData = [...displayValue]
            displayData.splice(index,1)
            setDisplayValue(displayData)
          }}
        > <Ptags>Name: {listItem.name}</Ptags>
          <Ptags>Cost: {listItem.value}</Ptags>
        </Container>
      ))}
          </Position>
    </Body>
  );
}

const Body = styled.body`
background-color: #282c34;
height: 100vh;
padding: 30px;
`
const Hone = styled.h1`
color: teal;
font-size: 50px;
margin-top: 40px;
`

const Ptags = styled.p`
color: white;
font-size: larger;
`

const InputFields = styled.input `
font-size: larger;
padding: 8px;
`
const AddButton = styled.button `
height: 45px;
width: 70px;
display: flex;
margin-top: 20px;
font-size: 30px;
`
const Container = styled.div`
cursor: pointer;
text-align: center;
border: teal solid 2px;
width: 200px;
margin-top: 10px;
font-size: larger;
`
const Position = styled.div`

display: flex;
align-items: center;
justify-content: start;

`


export default App;
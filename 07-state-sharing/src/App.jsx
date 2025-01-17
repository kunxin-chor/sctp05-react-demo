import React, {useState} from 'react';
import Dice from './Dice';

export default function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice1 = ()=> {
    const randomNumber = Math.floor(Math.random()*6+1);
    setDice1(randomNumber)
  }

  const rollDice2 = ()=> {
    const randomNumber = Math.floor(Math.random()*6+1);
    setDice2(randomNumber)
  }

  return <>
    <h1>Dice</h1>
    <Dice diceValue={dice1} rollDiceFunc={rollDice1}/>
    <Dice diceValue={dice2} rollDiceFunc={rollDice2}/>
    <h2>Sum of Dice: {dice1 + dice2}</h2>
  </>
}
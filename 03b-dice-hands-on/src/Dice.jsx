import React, {useState} from 'react';

export default function Dice() {

    // when the component is being mounted, set diceNumber to the default value, which is 1
    const [diceNumber, setDiceNumber] = useState(1);

    const getDiceColor = ()=> {
        if (diceNumber % 2 ==0) {
            return "green"
        } else {
            return "red";
        }
    }

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        setDiceNumber(randomNumber); // <-- React cannot detect if a state variable has changed
                                     // unless we use the setDiceNumber function. We must use the setter function
                                     // to trigger a re-render

        // diceNumber = randomNumber
    }

    return (
        <>
       <div style={{
        border: "1px solid black",
        height: "50px",
        width: "50px",
        padding:"10px",
        fontSize:"24px",
        margin:"5px",
        backgroundColor: getDiceColor()
       }}>
       {diceNumber} 
       </div>
       <button onClick={rollDice}>Roll</button>
       </>
    )
}
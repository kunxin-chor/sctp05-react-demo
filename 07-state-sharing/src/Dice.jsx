import React from 'react'

export default function Dice(props) {
    

    return (<>
        <div style={{
            border: "1px solid black",
            fontSize: "24px",
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div>
                {props.diceValue}
            </div>
            <button onClick={()=>{
                props.rollDiceFunc()
            }}>Roll</button>
        </div>
    </>)
}
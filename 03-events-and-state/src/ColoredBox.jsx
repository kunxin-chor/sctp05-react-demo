import { useState } from 'react'
import apples from "./assets/apples.jpg";
import watermelon from "./assets/Watermelon.webp";
export default function ColoredBox() {

    const [color, setColor] = useState("green");

    const redButtonClick = () => {
        setColor("red");
    }

    const drawFruit = () => {
        if (color == "red") {
            return apples;
        } else if (color == "green") {
            return watermelon;
        }
        return null;
    }

    return (
        <>

            {/* <img src={drawFruit()}/> */}

            {color == "red" ? <img src={apples} /> : <img src={watermelon} />}

            <div style={{
                margin: "10px",
                backgroundColor: color,
                border: color == "red" ? "5px solid black" : "5px dotted black",
                height: "50px",
                width: "50px"
            }} />
            <button onClick={redButtonClick}>Red</button>

            <button onClick={() => {
                setColor("green");
            }}>Green</button>
        </>
    )
}
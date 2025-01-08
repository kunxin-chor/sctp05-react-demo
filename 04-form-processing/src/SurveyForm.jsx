import React, { useState } from 'react';

export default function SurveyForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("red");

    // all event handler takes in one parameter known as event parameter
    const updateName = (event) => {
        setName(event.target.value);
    }

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updateColor = (event) => {
        setColor(event.target.value);
    }

    const handleSubmit = () => {
        console.log("Submitting", name, email);
    }

    return (<>
        <div>
            <label>Enter your name: </label>
            <input type="text" value={name}
                onChange={updateName} />
        </div>

        <div>
            <label>Enter your Email</label>
            <input type="text" value={email}
                onChange={updateEmail} />
        </div>

        <div>
            <label>What's your favourite primary colour?</label>
            <label>Red</label>
            <input type="radio" 
                   value="red" 
                   name="favouriteColor"
                   onChange={updateColor}   
                   checked={color === "red"}
                
                  
            />

            <label>Green</label>
            <input type="radio" 
                value="green" 
                name="favouriteColor"
                onChange={updateColor}
                checked={color === "green"}
              
            />

            <label>Blue</label>
            <input type="radio" 
                value="blue" 
                name="favouriteColor"
                onChange={updateColor}
                checked={color === "blue"}
            />
        </div>

        <button onClick={handleSubmit}>Submit</button>

    </>)
}
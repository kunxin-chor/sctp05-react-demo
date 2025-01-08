import React, { useState } from 'react';

export default function SurveyForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("red");
    const [hobbies, setHobbies] = useState([]);

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

    const updateHobbyNotElegant = (event) => {
        console.log(event.target.value);
        // to update an array in React, follow the steps
        // below

        // check if the checkbox is checked after the change
        if (event.target.checked) {
            // 1. create a clone of the original array
            const clone = hobbies.slice();

            // 2. modify the clone
            clone.push(event.target.value);

            // 3. replace the current array with the clone in the state
            setHobbies(clone);
        } else {
            console.log("remove from array")
            // 1. create a clone of the originala rray
            const clone = hobbies.slice();

            const indexToDelete = hobbies.findIndex(function(h){
                return h === event.target.value
            });

            clone.splice(indexToDelete, 1);

            setHobbies(clone);
        }
    }

    const updateHobby = (event) => {
        if (event.target.checked) {
            const cloned = [...hobbies, event.target.value];  // => const cloned = hobbies.slice();
            setHobbies(cloned);
            // setHobbies([...hobbies, event.target.value])
        } else {
            const indexToDelete = hobbies.findIndex(function(h){
                return h === event.target.value;
            });
            const left = hobbies.slice(0, indexToDelete);
            const right = hobbies.slice(indexToDelete + 1);
            const cloned = [...left, ...right];
            setHobbies(cloned);
        }
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

        <div>
            <label>Select your hobbies (more than one)</label>

            <label>Stamp Collecting</label>
            <input type="checkbox"
                value="stamp-collecting"
                onChange={updateHobby}
                checked={hobbies.includes("stamp-collecting")}
            />

            <label>Fitness</label>
            <input type="checkbox"
                value="fitness"
                onChange={updateHobby}
                checked={hobbies.includes("fitness")}
            />

            <label>Cooking</label>
            <input type="checkbox"
                value="cooking"
                onChange={updateHobby}
                checked={hobbies.includes("cooking")}
            />

            <label>Reading</label>
            <input type="checkbox"
                value="reading"
                onChange={updateHobby}
                checked={hobbies.includes("reading")}
            />

        </div>

        <button onClick={handleSubmit}>Submit</button>

    </>)
}
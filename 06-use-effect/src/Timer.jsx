import React, {useEffect} from 'react'

export default function Timer() {
    // the useEffect function takes in 2 parameters
    // 1. the function to run to setup the effect
    // 2. when the function will be ran (aka dependencies)
    //   --> when any variables in the dependencies changes, the function
    //   in the first parameter will be ran. If it's an empty array
    //   it means the effect will ran once when the component is mounted
    useEffect(()=>{
        setTimeout(()=>{
            alert("Hello Happy CNY")
        }, 5000);
    }, [])
}
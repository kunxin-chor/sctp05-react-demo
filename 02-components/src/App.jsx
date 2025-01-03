import React from 'react';
import apples from "./assets/apples.jpg";
import bubbleTea from "./assets/Bubble_Tea.png"
import "./App.css";

// Create a component that display an image
// and has a border around it
function BorderImageFrame(props) {
  return (

    /*
      <img src="apple.jpg" style="border:3px solid red;margin:10px;padding:10px"
    */

    // Inline CSS must be provided as an object
    <img src={props.img} style={{
      border:"3px solid red",
      margin:"10px",
      padding:"10px"
    }}/>
  )
}


function ImageFrame() {
  return (
    <img src={apples}/>
  )
}

// A component in React
// 1. is a function
// 2. returns JSX
// 3. first alphabet is uppercase
// 4. can recieve parameters in the form of props
// - props are objects and is the first argument/parameter of all component functions
function AlertMessage(props) {

  const message = props.message;
  const color = props.bgColor;
  // 
  // let el = document.querySelector(".alert"); 
  // el.style.backgroudColor = "azure";

  return <div style={{
    padding:"10px",
    margin:"10px",
    backgroundColor: props.bgColor
  }}>{message}</div>
}

function sayGoodbye() {
  return "Bye bye";
}

function sayHappyNewYear() {
  // JSX elements are just JavaScript objects in disguse
  // likewise we can return JSX elements from function
  return <h3>Happy New Year</h3>
}

function ShoutMessage(props) {
  // props should contain a `msg` key which is to store the message
  const msg = props.msg;
  return <div>{msg.toUpperCase()}</div>
}

// expects:
//  - props.number1 -- the first number
//  - props.number2 -- the second number
function SumOfTwo(props) {
  const {number1, number2} = props;   
  // const number1 = props.number1;
  // const number2 = props.number2;
  const number = number1 + number2;
  return <div>
    Sum of number = {number}
  </div>
}

function SumOfTwoV2(props) {
  return <div>
    Sum of number = {props.number1 + props.number2}
  </div>
}

export default function App() {
  return (
    <>
    <h1>Hello World</h1>
    {sayGoodbye()}
    {sayHappyNewYear()}
    {/* When we want to call a Component function
    we can treat it as if it is a JSX element */}
    <ShoutMessage msg="Hello World"/>
    <AlertMessage message="Login Failed" bgColor="pink"/>
    <AlertMessage message="Login Successful" bgColor="green"/>
    <SumOfTwo number1={2} number2={3}/>
    <SumOfTwo number1={10}  number2={5}/>
    <ImageFrame/>
    <ImageFrame/>
    <BorderImageFrame img={apples}/>
    <BorderImageFrame img={bubbleTea}/>
    </>
  )
}
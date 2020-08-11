import React, {useState} from 'react';
import {Message} from './Message'
import './App.css';


export default function App() {

 
let [count, setCount] = useState(1);
let [isMorning, setMorning] = useState(true)



  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1>This is a {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}/>
    
      <button onClick={()=> setCount(++count)}>Update Button</button>

      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
    </div> 
  ); 
} 
 

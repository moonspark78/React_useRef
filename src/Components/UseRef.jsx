import React, { useState, useRef } from 'react'
import "./UseRef.css"



export const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {

        setCount(count+1);
        countRef.current++;

        console.log("State", count);
        console.log("Ref", countRef.current);
    };




  return (
    <div className='ref'>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

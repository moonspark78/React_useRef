import React, { useState, useRef, useEffect } from 'react'
import "./UseRef.css"



export const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);

    const handleIncrement = () => {
        setCount(count+1);
        countRef.current++;
       /*  console.log("State", count);
        console.log("Ref", countRef.current); */
    };

    useEffect(() => {
        inputRef.current?.focus();
    },[]);




  return (
    <div className='ref'>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <input ref={inputRef} type='text' placeholder='Type Something ....'/>
    </div>
  )
}

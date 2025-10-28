import { useState } from "react";

import "./counter.css";

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState();

    /** 
     * setTimeout(() => {
     * setCount(count+1);
     * }, 1000);
     */

    const handleAdd = ()=>{
        setCount(count + 1);
        setMessage('')
    };

    const handleSubtract = ()=>{
        if(count > 0){
            setCount(count - 1);
           setMessage('')
        }else{
            setMessage('No puede ser menor de cero')
        }
    };

    const handleReset = ()=>{
        setCount(0);
    };


    return (
        <>
            <div className="container">
                <h1>Contador: {count}</h1>
                <hr />
                <button onClick={handleAdd}>+</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubtract}>-</button>
            </div>
            <>
                <h1>{message}</h1>
            </>
        </>
    );
}

export default Counter
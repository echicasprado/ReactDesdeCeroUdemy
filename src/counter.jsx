import { useState } from "react";

import "./counter.css";

const Counter = () =>{
    const [count, setCount] = useState(0);

    const handleAdd = ()=>{
        setCount(count + 1);
    };

    const handleSubtract = ()=>{
        if(count > 0){
            setCount(count - 1);
        }
    };

    const handleReset = ()=>{
        setCount(0);
    };

    const message = count === 0?'El contador no puede ser menor que 0':'';

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
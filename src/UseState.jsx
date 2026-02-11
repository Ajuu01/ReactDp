import { useState } from "react"
import Button from "./Button"

function UseState(){
    const [count,setCount]=useState(0)
    const increaseCount=()=>{
        setCount(count+1)
    }
    const decreaseCount=()=>{
        setCount(count-1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onMouseOver={increaseCount}>+</button>
            <button onMouseEnter={decreaseCount}>-</button>
        </>
    )
}

export default UseState
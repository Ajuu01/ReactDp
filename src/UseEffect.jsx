import { useEffect, useState } from "react"

function UseEffect(){
    // useEffect(()=>{
    //     console.log("Meow Meow")
    // },[])
    const [like,setLike]=useState(0)
    const likeIncrease=()=>{
        setLike(like+1)
    }
    useEffect(()=>{
        console.log("Like hitted")
    })
    return(
        <>
            <h1>Hello from UseEffect</h1>
            <p>Like:{like}</p>
            <button onClick={likeIncrease}>Hit Like</button>
        </>
    )
}

export default UseEffect
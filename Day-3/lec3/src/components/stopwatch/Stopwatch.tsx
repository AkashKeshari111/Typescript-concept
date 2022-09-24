import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime]=useState(100);
    const timerId=useRef<any>(null)
    const start=()=>{
        if(!timerId.current){
            timerId.current=setInterval(()=>{
                setTime((prevTime)=>prevTime-1)
            },1000)
        }
    }
    const pause=()=>{
        clearInterval(timerId.current)
        timerId.current=null;
    }

    const reset=()=>{
        clearInterval(timerId.current);
        setTime(100)
    }

  return (
    <div><h1>Stopwatch : {time}</h1>
    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>

    <button onClick={reset}>reset</button>

    
    </div>
  )
}

export default Stopwatch
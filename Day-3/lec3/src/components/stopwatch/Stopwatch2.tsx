import React, { useRef, useState } from 'react'
import { useCountdown } from '../../Hooks/useCountdown'

const Stopwatch2 = () => {
   const {time,start,pause,reset}=useCountdown(500)

  return (
    <div><h1>Stopwatch : {time}</h1>
    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>

    <button onClick={reset}>reset</button>

    
    </div>
  )
}

export default Stopwatch2
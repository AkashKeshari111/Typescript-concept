import React, { useState } from 'react'
import Button from './Button';
import Count from './Count';

const Counter = () => {
 const [count,setCount]=useState<number>(0)//1st change


  return (
    <div>
       <Count count={count}/>
       <Button onClick={()=>setCount(count-1)}>-</Button>
       <Button onClick={()=>setCount(count+1)}>+</Button>
    </div>
  )
}

export default Counter
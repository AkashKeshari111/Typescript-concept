import React, { useState } from 'react'

type buttonProps={
    children:string;
    onClick:Function;
}

const Button = ({children,onClick}:buttonProps) => {
    
  return (
    <button onClick={()=>onClick()}>{children}</button>
  )
}

export default Button
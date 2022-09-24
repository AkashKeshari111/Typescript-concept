import React, { useState } from 'react'
import { useTimeOut } from '../Hooks/useTimeOut'

const TimeOutPage = () => {

  
const {ready} =useTimeOut(5000)


  return (
    <div>{ready?"ready":"not ready........"}</div>
  )
}

export default TimeOutPage
import React from 'react'
type countProps={
    count:number;
}
const Count = ({count}:countProps) => {
  return (
    <div>{count}</div>
  )
}

export default Count

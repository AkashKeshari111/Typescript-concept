import React from 'react'



type todoProps={
    id:number;
    title:string;
    isCompleted:boolean;
    handleToggle:Function;
    handleDelete:Function;
}

const TodoItems = ({id,title,isCompleted,handleToggle,handleDelete}:todoProps) => {
  return (
    <div >
        <span>{title}</span><button onClick={()=>handleToggle(id,!isCompleted)}>{isCompleted?"com":"Not_com"}</button ><button onClick={()=>handleDelete(id)}>Del</button>
    </div>
  )
}

export default TodoItems
import React, { ChangeEvent, FormEvent, useState } from 'react'
type AddTodoProps={
    addNewTodos:Function;  //function always be in capital first letter ---> Function
}


const AddTodo = ({addNewTodos}:AddTodoProps) => {
    const [text,setText]=useState<string>("")

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const handleAdd=(e: FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     addNewTodos(text)
     setText("")
    }
  return (
    <form onSubmit={handleAdd}>
        <input type="text" onChange={handleChange}/>
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodo
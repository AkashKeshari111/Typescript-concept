import axios,{AxiosResponse} from 'axios';  //3rd change
import React, { useEffect, useState } from 'react'
import AddTodo from './TodoInput';
import TodoItems from './TodoItems';


type Todo={
    id:number;
    title:string;
    isCompleted:boolean;
  }

const getTodoApi=async()=>{
    let response:AxiosResponse<Todo[]>= await axios.get("http://localhost:8080/Todos"); //1st change
    return response.data
}


type InputCreateTodo={
    title:string;
    isCompleted:boolean;
}

const postTodosApi=async(params:InputCreateTodo)=>{
    let response:AxiosResponse<Todo>=await axios.post("http://localhost:8080/Todos",params);
    return response.data
}

type UpdateCreateTodo={
    id:number;
    isCompleted:boolean;
}

const updateTodosApi=async(params:UpdateCreateTodo)=>{
    let response:AxiosResponse<Todo>=await axios.patch(`http://localhost:8080/Todos/${params.id}`,params);
    return response.data
}

type deleteCreateTodo={
    id:number;

}

const deleteTodosApi=async(params:deleteCreateTodo)=>{
    let response:AxiosResponse<Todo>=await axios.delete(`http://localhost:8080/Todos/${params.id}`);
    return response.data
}



const Todos = () => {
    const [Todo,setTodo]=useState<Todo[]>([]);   //2nd change
   

    const getTodos=()=>{
        getTodoApi().then(d=>{
            setTodo(d)
        })
      
    }

    const addNewTodos=(title:string)=>{  
        postTodosApi({
            title,
            isCompleted:false,
        }).then((d)=>{
            setTodo([...Todo,d])
        })
    }


    const updatedTodos=(id:number,isCompleted:boolean)=>{    
        updateTodosApi({
           id,
           isCompleted,
        }).then(()=>{
           getTodos()
        })   
   }


   const deletedTodos=(id:number)=>{    
    deleteTodosApi({id}).then(()=>{
       getTodos()
    })   
}

    useEffect(()=>{
        getTodos()
    },[])
 


  return (
    <div><h1>Todos</h1>
    <AddTodo addNewTodos={addNewTodos}/>
    {Todo.map((todo)=>(
        <TodoItems key={todo.id} {...todo} handleToggle={updatedTodos} handleDelete={deletedTodos}/>
    ))}
    </div>
  )
}

export default Todos
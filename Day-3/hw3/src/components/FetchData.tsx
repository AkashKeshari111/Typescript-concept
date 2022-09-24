import axios from "axios"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { getDataApi, postDataApi } from "../Action/Api";
import { useFetch } from "../UseState/useFetch"


type post={
  title?:string;
  gender?:string;
}

const FetchData = () => {

const {data,loading,error}=useFetch<post[],undefined>(getDataApi)
// const [text,setText]=useState({text:"",gender:""})

const {data:d1,loading:l1,error:e1,execute}=useFetch<post,string>(postDataApi,true)

// const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
//   const {name,value}=e.target;

//   setText({...text,[name]:value})
// }

// const postData=(e:FormEvent<HTMLFormElement>,title:string,gender:string)=>{
//   e.preventDefault()
//   postDataApi({
//     id:data.length+1,
//     title:title,
//     gender:gender,
//   }).then((d)=>{
//     console.log(d)
    
//   })
// }




  return (
    <div><h1>FetchData</h1>
     {loading || l1 && <h1>Loading...</h1>}
     {error || e1 && <h1>Error...</h1>}
    {data  && <h1>Data...</h1>}

    <button onClick={()=>execute("male")}>Click</button>
    </div>
  )
}

export default FetchData
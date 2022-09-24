import axios from 'axios'
import React, { useEffect, useState } from 'react'

const getData=async()=>{
   let res=await axios.get("http://localhost:8080/details");
   return res.data;
}

const FetchData = () => {
const [data,setData]=useState([]);

useEffect(()=>{
    getData().then((d)=>{
      setData(d)
    })
},[])


  return (
    <div><h1>FetchData</h1>
    
    </div>
  )
}

export default FetchData
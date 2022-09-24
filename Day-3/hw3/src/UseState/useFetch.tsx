import React, { useEffect, useState } from 'react'
import { getDataApi } from '../Action/Api';



export const useFetch =<A,B> (ApiFetch:Function,isDelayed:boolean=false) => {
    const [data,setData]=useState<A>();
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<boolean>(false);



    const execute=async(params?:B)=>{
  setLoading(true)
  try{
    let data= ApiFetch(params)
    setData(data)
  }catch(e){
   setError(true)
  }finally{
    setLoading(false)
  }
    }

      useEffect(()=>{
        if(!isDelayed){
            execute()
        }
        
      
      },[isDelayed])


return {data,loading ,error , execute}

}


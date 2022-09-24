import { useEffect, useState } from "react"


type getProps={
    id:number;
    title:string;
    gender:string;
}


type postProps={
 
    title:string;
    gender:string;
}

export const useFetch=(ApiFetch:Function)=>{
    const [loading,setLoading]=useState<boolean>(false)
    const [error,setError]=useState<boolean>(false)
    const [data,setData]=useState<getProps[]>([])

  
  
  const getData=async(params?:postProps)=>{
    setLoading(true)
  try{
    let d=await ApiFetch(params);
    
        setData(d)
    
  
  }catch(e){
    console.log(e)
    setError(true)
  }finally{
      setLoading(false)
  }
  
      // getApi().then((d)=>{
      //   setLoading(true)
      //     setData(d)
      // }).catch((e)=>{
      //   setError(true)
      // }).finally(()=>{
      //   setLoading(false)
      // })
  }



  
     useEffect(()=>{
            getData()
     },[])
 
     


     return {loading,error,data,getData}
}
import axios from "axios"

export const getApi=async ()=>{
    let res=await axios.get("http://localhost:8080/data");
    return res.data
}


type postProps={
 
    title:string;
    gender:string;
}

export const postApi=async (params:postProps)=>{
    let res=await axios.post("http://localhost:8080/data",params);
    return res.data
}
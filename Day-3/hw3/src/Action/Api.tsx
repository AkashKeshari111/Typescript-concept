import axios from "axios";

export const getDataApi=async()=>{
    let res=await axios.get("http://localhost:8080/details");
    return res.data;
 }



 type postProps={
    title:string;
    gender:string;
 }
 export const postDataApi=async(params:postProps)=>{
    let res=await axios.get("http://localhost:8080/details",{params});
    return res.data;
 }
import { useState } from "react";


export const useTimeOut=(fromTime:number)=>{
    const [time,setTime]=useState<number>(fromTime);

    const [ready,setReady]=useState<boolean>(false);


    setTimeout(()=>{
    setReady(true)
    },time)




    return {ready}
}
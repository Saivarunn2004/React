import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Saivarunn2004')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers:{data.followers+1435}
        </div>
    )
}

export default GitHub;

export const githubInfo=async()=>{
    const res=await fetch('https://api.github.com/users/Saivarunn2004')
    return res.json();
}
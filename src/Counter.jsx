import React, { useEffect } from 'react'
import { useState } from 'react';
function Counter() {
  var [count,setCount]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setCount((cv)=>{
            return cv+1
        });
        console.log("Set Interval")
      },2000)
  },[])
  
  function Inc(){
   setCount(count+1);
   
}
  function Dec(){
    setCount(count-1);
  }
  function Res(){
    setCount(0);
  }

  return (
    <div  className='border border-2 border-warning m-2 p-2'>
      <h1>Counter:{count}</h1>
      <button onClick={()=>{Inc()}} style={{backgroundColor:"green",border:"green",color:"white",marginBottom:"15px"}}>Increment</button>
      <button onClick={()=>{Dec()}} style={{marginLeft:"15px",backgroundColor:"red",border:"red",color:"white"}}>Decrement</button>
      <button onClick={()=>{Res()}} style={{marginLeft:"15px",backgroundColor:"blue",border:"blue",color:"white"}}>Reset</button>
    </div>
  )
}

export default Counter

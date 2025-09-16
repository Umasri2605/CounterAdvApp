import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import ChildComp from './ChildComp'


function App() {
var [myname,setMyname]=React.useState("");

var k=React.useMemo(()=>{
  return [53,89]
},[]);

var p=React.useMemo(()=>{
  return {country:"india"}
},[]);


var greeting=useCallback(function(){
  alert("How R You")
},[]);

  return (
    <div className='border border-2 border-info m-2 p-2'>
     <h1>Counter Application</h1>
     {/* <Counter></Counter>  */}
     <h2>UseMemo React Component</h2>
     <input type="text" onChange={(e)=>{
      setMyname(e.target.value)
     }}/>
     <h2>Myname:{myname}</h2>
     <ChildComp x={2} y={"uma"} z={k} w={p} ></ChildComp>
    </div>
  )
}

export default App

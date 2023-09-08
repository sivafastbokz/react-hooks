import React, { useEffect, useRef, useState } from 'react';

function UserData(){
    const[count,setCount]=useState(0);
    const counts = useRef(0); 
    // const inputTag = useRef()
    const add = ()=>{
        setCount(count +1)
    }

    // const inputFocus = ()=>{
    //     inputTag.current.focus()
    // }
    // const handleAdd =()=>{
    //    counts.current++
    //    console.log(`button clicked ${counts.current} times`)
    // }
    useEffect(()=>{
        counts.current = count
    },[count])
    return(
        <>
        {console.log('rendered')}
         <button onClick={add}>add useState</button>
         <div>{count}</div>
         <p>Count (from ref): {counts.current}</p>
         <br/>
         {/* <button onClick={handleAdd}>add useRef</button> */}
         <br/>
         {/* <input type='text' ref={inputTag}></input> */}
         {/* <button onClick={inputFocus}>focus</button> */}
        </>
    )
}
export default  UserData;
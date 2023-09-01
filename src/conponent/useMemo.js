import React, { useState,useMemo } from 'react';

function Counter(){
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
     
    const addCounterOne = ()=>{
        setCounterOne(counterOne + 1)
    }
     
    const addCounterTwo = ()=>{
        setCounterTwo(counterTwo +1)
    }

    
    const isEven = useMemo(()=>{
        let i = 0
        while( i < 2000000000) i++ 
        console.log('iseven is checked')
        return  counterOne % 2 === 0
      },[counterOne])

    // const isEven=()=>{
    //     console.log('iseven is checked')
    //     return  counterOne % 2 === 0
    // }
    return(
        <>
        {console.log('rendered')}
       <button onClick={addCounterOne}>counterOne: {counterOne}</button>
       {/* <span>{isEven() ? 'Even' :'Odd'}</span> */}
       <span>{isEven ? 'Even' :'Odd'}</span>
       <br/>
       <button onClick={addCounterTwo}>countertwo: {counterTwo}</button>
        </>
    )
}

export default Counter;
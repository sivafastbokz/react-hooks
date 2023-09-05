import React, { useState,useMemo,useCallback } from 'react';

function Counter(){
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
     
    const addCounterOne = ()=>{
        setCounterOne(counterOne + 1)
    }
     
    const addCounterTwo = ()=>{
        setCounterTwo(counterTwo +1)
    }

    
    // const isEven = useMemo(()=>{
    //     console.log('iseven is checked')
    //     let i = 0
    //     while( i < 2000000000) i++ 
    //     return  counterOne % 2 === 0
    //   },[counterOne])

    // const isEven=()=>{
    //     console.log('iseven is checked')
    //     return  counterOne % 2 === 0
    // }

    const isEven = useCallback(()=>{
        let i = 0
        while( i < 2000000000) i++ 
        console.log('iseven is checked')
        return  counterOne % 2 === 0
      },[counterOne])
      
    return(
        <>
        {console.log('rendered')}
       <button onClick={addCounterOne}>counterOne: {counterOne}</button>
       <span>{isEven() ? 'Even' :'Odd'}</span>
       {/* <span>{isEven ? 'Even' :'Odd'}</span> */}
       <br/>
       <button onClick={addCounterTwo}>countertwo: {counterTwo}</button>
        </>
    )
}

export default Counter;


// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable

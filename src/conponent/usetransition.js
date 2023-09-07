import React, { useState, useTransition } from 'react';

function List(){
    const[inputValue,setInputValue]=useState('');
    const[list,setList]=useState([]);
    const[isPending,startTransition]=useTransition()
      
    const list_size = 20000

    const handleChange =(event)=>{
        setInputValue(event.target.value)
        startTransition(()=>{
            const emptyArray =[]
            for( let i =0;i<list_size;i++){
                emptyArray.push(event.target.value)
            }
            setList(emptyArray)
        })
        
    } 


    return(
        <>
         <input type='text' value={inputValue} onChange={handleChange}></input>
         { isPending ? 'Loading...' :
         list.map((items,index)=>{
            return <div key={index}>{items}</div>
         })}
        </>
    )
}
export default List;
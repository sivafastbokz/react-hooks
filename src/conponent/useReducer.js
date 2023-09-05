import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state,action)=>{
 switch(action){
   case 'increment': return state +1
   case 'decrement' : return state -1
   default : return state
 }
}

function Reducer(){
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <>
         <div>{count}</div>
         <button onClick={()=>dispatch('increment')}>increment</button>
         <button onClick={()=>dispatch('decrement')}>decrement</button>
        </>
    )
}

export default Reducer;
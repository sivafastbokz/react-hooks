import React, { useState } from 'react';

function UserData(){
    const[userName,setUserName]=useState('');

    return(
        <>
        <input type='text' onChange={(event)=>setUserName(event.target.value)}></input>
        <h2>{userName}</h2>
        </>
    )
}
export default  UserData;
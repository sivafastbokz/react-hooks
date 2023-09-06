import React, { useId } from 'react';

function InputId(){
    const id = useId();
    return(
        <>
        <label htmlFor={id}>email</label>
        <input type='email' id={id}></input>
        </>
    )
}

export default InputId;
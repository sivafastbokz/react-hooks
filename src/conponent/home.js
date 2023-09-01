import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {userDataContext} from '../App'

function Home(){
    const navigate = useNavigate();
    const profilePage = ()=>{
        navigate('/profile')
    }
    const userData = useContext(userDataContext)
    return(
        <>
        <h1>this is home page</h1>
        <p>want to see your profile details then click the button below!</p>
        <button onClick={profilePage}>profile page</button>
        <h3> userId:{userData.userId}</h3>
        </>
        
    )
}

export default Home;
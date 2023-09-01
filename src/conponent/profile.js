import React from 'react';
import { useContext } from 'react';
import { userDataContext } from '../App';

function Profile(){
    const userData = useContext(userDataContext)
    return(
        <>
        <h1>this is profile page</h1>
        <h2>User Details</h2>
        <p>userName:{userData.userName}</p>
        <p>userAge:{userData.userAge}</p>
        <p>userLocation:{userData.userLocation}</p>
        <p>userPhoneNo:{userData.userPhoneNo}</p>
        <p>gender:{userData.gender}</p>
        </>
    )
}
export default Profile;
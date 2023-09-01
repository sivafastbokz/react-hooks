import React, { useState,useEffect } from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Profile from './conponent/profile';
import Home from './conponent/home';
import './App.css';

 export const userDataContext = React.createContext()

function App() {
  const[userData,setUserData]=useState({})
  useEffect(() => {
    const userDetails = {
      userId: 56478,
      userName: 'siva',
      userAge: 21,
      userLocation: 'coimbatore',
      userPhoneNo: 258755485148,
      gender: 'male',
    };
    setUserData(userDetails);
  }, []);
  return (
    <userDataContext.Provider value={userData}>
    <Router>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
    </userDataContext.Provider>
  );
}

export default App;

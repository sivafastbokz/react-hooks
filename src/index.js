import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Counter from './conponent/useMemo';
// import UserData from './conponent/useRef';
import reportWebVitals from './reportWebVitals';
import Blog from './conponent/blog';
// import Reducer from './conponent/useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <UserData/> */}
    {/* <Reducer/> */}
   <Blog/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

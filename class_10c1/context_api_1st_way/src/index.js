
import ReactDOM from 'react-dom/client';
import './index.css';
import { createContext } from 'react';
import App from './App';
// import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const [name,setName]=useState("Rules and Ethics By Unknown");// aap state ko bina kisi functional component ke nhi bna sakte hai


// step -1 done(identify)
const name = "Rules and Ethics By Unknown";
const publisher = "Jk Prakashan"
//  context ko create kar leaya hai
export const contextApi = createContext();

function multiPlyOfTwo(x, y) {
  console.log(x * y)
}
//  create a obj

const obj = {
  name, publisher,multiPlyOfTwo
}
//  wrap your variable or function inside context
root.render(

  //  provide your context
  <contextApi.Provider value={obj}>
    <App />
  </contextApi.Provider>

);


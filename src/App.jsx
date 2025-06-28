import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export default function App() {
const [token,setToken]= useState(null)

 useEffect(() => {
    const checkCookie = async () => {
      try {
        const res = await axios.post(
          "https://auth-jwt-nnkh.onrender.com/api/user/signup",
          { name: "rup" },
          {
            withCredentials: true,
          }
        );
        console.log(res);
      } catch (error) {
        console.error("Error while checking cookie:", error);
      }
    };

    checkCookie();
  }, []); 

  
  const clickHandler=()=>{
    const cookie =Cookies.get('jwt') 
    
    alert("clicking")
    setToken(cookie)
  }
  

  return (
    <div >
      <button onClick={clickHandler}>click me</button>
      <h1>{token ? token : "no token"}</h1>
    </div>
  )
}

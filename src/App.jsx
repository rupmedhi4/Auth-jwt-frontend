import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export default function App() {
const [token,setToken]= useState(null)

 useEffect(() => {
    const checkCookie = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/user/signup",
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

console.log(Cookies.get('jwt') )

  const clickHandler=()=>{
    alert("this is click")
    setToken("cookie")
  }
  

  return (
    <div >
      <button onClick={clickHandler}>click me</button>
    </div>
  )
}

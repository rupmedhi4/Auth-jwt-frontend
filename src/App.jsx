import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function App() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        "https://auth-jwt-nnkh.onrender.com/api/user/signup",
        { name: "rup" }
      );
console.log(res);

      // Save token as cookie manually
      Cookies.set("jwt", res.data.token, {
        path: '/',
        secure: true,
        sameSite: 'None',
        expires: 14
      });

      setData(res.data);
    };

    fetchData();
  }, []);

  const clickHandler = () => {
    const cookieToken = Cookies.get("jwt");
    setToken(cookieToken);
  };

  return (
    <div>
      <button onClick={clickHandler}>Get Token</button>
      <h2>{data?.message || "No message"}</h2>
      <h3>{data?.name || "No name"}</h3>
      <h1>{token || "No token"}</h1>
    </div>
  );
}

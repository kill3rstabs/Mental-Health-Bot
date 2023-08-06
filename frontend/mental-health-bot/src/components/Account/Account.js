import React, { useState } from "react";
import Register from "./register";
import Login from "./login";

export default function Account() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [buttons, setButtons] = useState(true);

  function handleRegister() {
    setRegister(true);
    setButtons(false);
  }

  function handleLogin() {
    setLogin(true);
    setButtons(false);
  }


  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      {buttons && (
        <div>
          <button onClick={handleLogin}>Login</button> <button onClick={handleRegister}>Register</button>
        </div>
      )}

      {register && <Register />}
      {login && <Login />}
    </div>
  );
}

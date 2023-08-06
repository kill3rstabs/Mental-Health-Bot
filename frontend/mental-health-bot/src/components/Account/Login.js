import React, { useState } from "react";
import axios from "axios"

export default function Account() {
  const [input, setInput] = useState({
    age: "",
    name: "",
    email: "",
    employeeStatus: "",
    relationshipStatus: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("localhost:3000/register")
    .then(response =>{
      console.log("API Response",response.data)
      setSubmitted(true);
    })
    .catch(error =>{
      console.log(error)
    })

  }

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Enter the following information for login</h3>

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        value={input.email}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={input.password}
        onChange={handleChange}
      />


      <button onClick={handleSubmit}>Login</button>

      {submitted && <p>Form submitted successfully!</p>}
    </div>
  );
}

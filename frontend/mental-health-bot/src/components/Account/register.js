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
      <h3>Enter the following information for Sign Up</h3>

      <label>Age</label>
      <input
        type="text"
        name="age"
        placeholder="Enter your Age"
        value={input.age}
        onChange={handleChange}
      />

      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        value={input.name}
        onChange={handleChange}
      />

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

      <label>Employee Status</label>
      <input
        type="text"
        name="employeeStatus"
        placeholder="Enter your Employee Status"
        value={input.employeeStatus}
        onChange={handleChange}
      />

      <label>Relationship Status</label>
      <input
        type="text"
        name="relationshipStatus"
        placeholder="Enter your Relationship Status"
        value={input.relationshipStatus}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Sign Up</button>

      {submitted && <p>Form submitted successfully!</p>}
    </div>
  );
}

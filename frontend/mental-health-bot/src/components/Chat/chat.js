import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function () {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("localhost:3000/register")
    .then(response =>{
      console.log("API Response",response.data)
      setResponse(response.data);
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      
        <Typography>Chat</Typography>
        <TextField onChange={handleChange} value={input}></TextField>
        <Button onClick={handleSubmit}>Submit</Button>
      
      {response !== "" && <div></div>}
    </Box>
  );
}

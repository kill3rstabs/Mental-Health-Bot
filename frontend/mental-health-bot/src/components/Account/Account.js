import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Account() {
    const { input,setInput } = useState(false)

    return (
    <Box
      sx={{
        p: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Enter the following information</Typography>

      <Typography>Age</Typography>
      <TextField
        label="Age"
        variant="outlined"
        placeholder="Enter your Age"
        value={input.username}
        // onChange={handleUsernameChange}
      ></TextField>

      <Typography>Name</Typography>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        //   value={username}
        //   onChange={handleUsernameChange}
      ></TextField>

      <Typography>Email</Typography>
      <TextField
        label="Email"
        variant="outlined"
        placeholder="Enter your Email"
        //   value={username}
        //   onChange={handleUsernameChange}
      ></TextField>

      <Typography>Password</Typography>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        //   value={username}
        //   onChange={handleUsernameChange}
      ></TextField>

      <Typography>Employee Status</Typography>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        //   value={username}
        //   onChange={handleUsernameChange}
      ></TextField>

      <Typography>Relationship Status</Typography>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        //   value={username}
        //   onChange={handleUsernameChange}
      ></TextField>
    </Box>
  );
}

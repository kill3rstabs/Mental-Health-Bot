import {Box} from "@mui/material";
import Account from "./components/Account/Account";
import Chat from "./components/Chat/chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <BrowserRouter basename="/companion">
        <Routes>
          <Route exact path="/" element={<Account></Account>} />
          <Route exact path="/chat" element={<Chat></Chat>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

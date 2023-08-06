import Account from "./components/Account/Account"
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <Account />
    </div>
);
}

export default App;

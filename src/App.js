import { useState } from "react";
import './App.css';
// import { getAllUsers } from "./utils/fetch ";
import LogOrSign from './componants/LogOrSign/LogOrSign';


const App = () => {
    const [LoggedIn, setLoggedIn] = useState(false);

  return (
      <div>
        <LogOrSign />
      </div>
    )

}

export default App;

import { useState } from "react";
import "./App.css";

import Body from "./Body";
import { GlobalProvider } from "./ContextAPI/GlobalProvider";
import { useEffect } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const contextValue = {
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    if (localStorage.getItem("user_id") !== null) {
      setCurrentUser(localStorage.getItem("user_id"));
    }
  }, []);
  return (
    <GlobalProvider.Provider value={contextValue}>
      <div className="App">
        <Body />
      </div>
    </GlobalProvider.Provider>
  );
}

export default App;

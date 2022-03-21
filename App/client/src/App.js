import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [apiResponse, getApiResponse] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/testapi").then((res) => {
      const response = res.data;
      getApiResponse(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;

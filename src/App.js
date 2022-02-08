import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
import {useState, useEffect} from "react";

function App() {
  const [ts, setTs] = useState("no value yet");
  useEffect(() => {
    subscribeToTimer(1000, (err, timestamp) => setTs(timestamp));
  },[])
  return (
    <div className="App" id="root">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current Timestamp is {ts}
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
    </div>
  );
}

export default App;

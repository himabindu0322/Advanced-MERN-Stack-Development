import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState("Press the button to see action!");

  const handleClick = () => {
    alert("You clicked the button!");
    setStatus("The button was clicked successfully!");
  };

  return (
    <div className="App">
      <h1>React Event Handling Example</h1>
      <p>{status}</p>

      <button onClick={handleClick}>
        Press Here
      </button>
    </div>
  );
}

export default App;
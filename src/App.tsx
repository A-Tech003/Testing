import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const Increase = () => {
    const newValue = count + 1;
    setCount(newValue);
  }

  const Restart = () => {
    setCount(0);
  }

  const Decrease = () => {
    const newValue = count - 1;
    newValue < 1? setCount(0) : setCount(newValue);
    
  }


  return (
    <div className="App">
      <h1>Counting System</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={Increase}>Increase</button>
        <button onClick={Restart}>Restart</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;

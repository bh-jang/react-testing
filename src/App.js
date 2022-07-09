import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabeld, setDisabled] = useState(false);

  return (
    <div className="App">
      <p data-testid="counter">{counter}</p>
      <div>
        <button disabled={disabeld} onClick={() => setCounter(counter - 1)} data-testid="minus-button">-</button>
        <button disabled={disabeld} onClick={() => setCounter(counter + 1)} data-testid="plus-button">+</button>
      </div>
      <button onClick={() => setDisabled(!disabeld)} style={{ backgroundColor: "blue"}} data-testid="on-off-button">on/off</button>
    </div>
  );
}

export default App;

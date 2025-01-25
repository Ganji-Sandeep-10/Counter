import "./styles.css";
import Heading from "./components/Heading";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  const add = () => {
    setCounter((prev) => prev + input);
  };
  const sub = () => {
    setCounter((prev) => prev - input);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <Heading />
      <div>
        <h2>{counter}</h2>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter increment value"
          value={input}
          onChange={(e) => {
            setInput(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default App;

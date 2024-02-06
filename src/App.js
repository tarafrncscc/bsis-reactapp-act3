import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="app-title">
        Caguiat's React Application (Increase, Decrease, and Reset Number)
      </h1>
      <div className="app-container">
        <h2 className="app-title1">Count: {count}</h2>
        <button
          className="app-button increase-button"
          onClick={handleIncrement}
        >
          Increase ( + )
        </button>
        <button
          className="app-button decrease-button"
          onClick={handleDecrement}
        >
          Decrease ( - )
        </button>
        <button className="app-button reset-button" onClick={handleReset}>
          Reset to Zero
        </button>
      </div>
    </div>
  );
}

export default App;

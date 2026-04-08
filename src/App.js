import React, { useState, useMemo } from "react";

const ExpensiveComponent = React.memo(({ number }) => {
  console.log("Rendering Expensive Component...");
  return <h3>Result: {number * 2}</h3>;
});

function App() {
  const [count, setCount] = useState(0);
  const [, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 1000;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Performance Optimization 🚀</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2>Count: {count}</h2>

      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      <ExpensiveComponent number={expensiveCalculation} />
    </div>
  );
}

export default App;
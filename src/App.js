import React, { useState, useMemo, lazy, Suspense } from "react";

// 🔥 Lazy loaded component (Code Splitting)
const ExpensiveComponent = lazy(() => import("./ExpensiveComponent"));

function App() {
  const [count, setCount] = useState(0);
  const [, setText] = useState("");

  // 🔥 Heavy computation (bottleneck simulation)
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating heavy task...");
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result += 1;
    }
    return result + count;
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

      {/* 🔥 Suspense for lazy loading */}
      <Suspense fallback={<p>Loading Component...</p>}>
        <ExpensiveComponent number={expensiveCalculation} />
      </Suspense>
    </div>
  );
}

export default App;
import React from "react";

// 🔥 Prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ number }) => {
  console.log("Rendering Expensive Component...");
  return <h3>Result: {number * 2}</h3>;
});

export default ExpensiveComponent;
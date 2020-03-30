import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(7);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(c => c + 1);
        }}
      >
        increment
      </button>
      <div>{count}</div>
      <div>{count2}</div>
    </div>
  );
}

export default App;

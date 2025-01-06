import { useState } from "react";

function StateExample() {
    // Declare a state variable called 'count' and initialize it to 0
    // The 'useState' hook returns an array with two elements:
    
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default StateExample;

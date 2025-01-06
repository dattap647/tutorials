import { useEffect, useState } from "react";

function LifecycleExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Component Mounted");

    // Simulate API call
    setTimeout(() => {
      console.log("Component Updated");
      setData("Hello, World!");
    }, 2000);

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Example</h2>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

export default LifecycleExample;

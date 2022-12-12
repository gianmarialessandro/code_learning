import { useState } from "react";

function Root() {
  const [count, setCount] = useState(0);

  return (
    <div className="Root">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default Root;

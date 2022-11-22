
import { useState } from "react";
import Button from 'react-bootstrap/Button';


function Root() {
  const [count, setCount] = useState(0);

  return (
    <div className="Root">
      <div className="card">
        <Button>ciao</Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default Root;

import React, { useState } from "react";

const TargetCount = () => {
  const [count, setCount] = useState(10);
  const clickIncrement = () => {
    if (count < 100) {
      setCount((prev) => prev + 10);
    }
  };
  return (
    <div>
      <center>
        <h1>Count Application</h1>
        <p style={{ fontSize: "30px" }}>
          Requirement : Count Initially should be 10, And count value should be
          increase by 10 in every clicking of button, Count button shouldn't
          work once the count reached 100.
        </p>
        <h1>{count}</h1>
        <button onClick={clickIncrement} className="btn btn-primary">
          Increment Count by 10
        </button>
      </center>
    </div>
  );
};

export default TargetCount;

import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [countId, setCountId] = useState();

  const clickIncrementStart = () => {
    setCountId(
      setInterval(() => {
        setCount((prev) => prev + 10);
      }, 1000)
    );
  };
  const clickIncrementStop = () => {
    clearInterval(countId);
  };
  return (
    <div>
      <center>
        <h1>Auto Count Application</h1>
        <p style={{ fontSize: "30px" }}>
          Requiement : The count value zero initially, Whenever start-click
          activated then count should be increase by 10 until or unless
          stop-click activated.
        </p>
        <h1>{count}</h1>
        <button onClick={clickIncrementStart} className="btn btn-primary m-2">
          Start
        </button>
        <button onClick={clickIncrementStop} className="btn btn-danger m-2">
          Stop
        </button>
      </center>
    </div>
  );
};

export default Parent;

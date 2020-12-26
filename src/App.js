import React from "react";
import "./style.css";

export default function App() {
  let counter = 0;
  // add counter function
  const addCounter = () => {
    counter = counter + 1;
    console.log(counter);
  };
  // rest Coutner function
  const restCounter = () => {
    counter = 0;
    console.log(counter);
    console.clear();
  };
  return (
    <div>
      <h1>{counter}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={addCounter}>Add +1</button>
      <button onClick={restCounter}>Rest</button>
    </div>
  );
}

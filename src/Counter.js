import React from "react";
import { useReducer } from "react";
import reducer from "./ReducerCounter";

function Counter() {
  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <button onClick={() => dispatch("increment")}> Increment</button>
        {count}
        <button onClick={() => dispatch("decrement")}>Increment</button>
      </div>
    </>
  );
}

export default Counter;

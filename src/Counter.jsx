import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNumber,
} from "./redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incAmt, setIncAmt] = useState(0);
  const addValue = Number(incAmt) || 0;
  const resetAll = () => {
    setIncAmt(0);
    dispatch(reset());
  };
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="text"
        name=""
        id=""
        value={incAmt}
        onChange={(e) => setIncAmt(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByNumber(addValue))}>
          Add Number
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

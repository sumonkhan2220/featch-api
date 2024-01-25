import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increseByAmount, reset } from "./counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increseByAmount(5));
        }}
      >
        IncreseBy5
      </button>
    </div>
  );
};

export default CounterView;

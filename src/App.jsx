import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy10,
  increment,
  incrementBy10,
} from "./store/counterSlice";

function App() {
  return (
    <div>
      counter:
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Compteur : {count}</h2>

      <button onClick={() => dispatch(incrementBy10())}>+ 10</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(decrementBy10())}>-10</button>
    </div>
  );
};

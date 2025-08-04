import { useState } from "react";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const multiplyThenCall = (
  a: number,
  b: number,
  cb: (times: number) => any
) => {
  const product = a * b;

  for (let i = 0; i < product; i++) {
    cb(product);
  }

  return product;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <>
      <h2>Counter Component</h2>
      <button onClick={decrement}>Decrement</button>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;

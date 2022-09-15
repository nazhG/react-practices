import { useState, useMemo } from "react";
import { useCounter } from "../hooks";


const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterations} iteraciones realizadas.`;
};


export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memoHeavyStuff = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Memorize</h1>
      <h3>
        Counter: <small>{ counter }</small>
      </h3>
      <hr />

      <h4>{ memoHeavyStuff }</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

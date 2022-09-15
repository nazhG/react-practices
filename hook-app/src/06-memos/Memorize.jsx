import { useCounter } from "../hooks/";
import { Small } from "./";
import { useState } from "react";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <h3>
        Counter: <Small counter={counter} />
      </h3>
      <hr />
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

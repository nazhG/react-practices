import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      {/* recuerda que siempre en el olclick se envia el evento */}
      <button className="btn btn-primary" onClick={ (/*event*/) => increment(5)}>
        +5
      </button>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn btn-secondary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-secondary" onClick={() => decrement(5)}>
        -5
      </button>
    </>
  );
};

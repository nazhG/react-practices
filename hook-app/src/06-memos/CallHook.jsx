import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallHook = () => {
  const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // como el memo pero para funciones
  const increment = useCallback(
    () => {
      // lo que pase es  que toma la referencia dle estado
      setCounter( (value) => value + 1);
    },
    [],// no se va a volver a llamar nunca
  )
  

  // no podemos usar Memo porque las funciones y lo sobj tienen valores diferentes al see espacios de memoria
  return (
    <>
      <h1>CallHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};

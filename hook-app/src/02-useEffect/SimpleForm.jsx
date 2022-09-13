import { useState } from "react";
import { useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "123",
    email: "nazhirgonzalez@gmail.com",
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("componente montado");
    const onMouseMuve = (e) => {
      const { x, y } = e;
      // console.log(x, y);
    };

    window.addEventListener("mousemove", onMouseMuve);

    // nota
    return () => {
      console.log("componente desmontado");
      window.removeEventListener("mousemove", onMouseMuve);
    };
  }, []);

  // useEffect(() => {
  //   // console.log("fromState changed")

  //   //clean up function
  //   return () => {
  //     // console.log("clean up")
  //   };
  // }, [formState]);
  // al estar vacio significa que solo se ejecutara una vez
  // crea efecto por cada cambio

  useEffect(() => {
    console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="User name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      
      <input
        type="email"
        className="form-control mt-2"
        placeholder="algo@algo.algo"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      {name == "123" && <Message />}
    </>
  );
};

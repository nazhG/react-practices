import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const { formState, handleInputChange, handleReset } = useForm({
    name: '',
    email: '',
    password: ''
  });
  
  const { name, email, password } = formState;

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
      
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button className="btn btn-primary mt-2"
        onClick={handleReset}>Borrar</button>

    </>
  );
};

import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const {formState:{description} , handleInputChange, handleReset} = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            todo: description,
            done: false,
        };

        onNewTodo(newTodo);
        handleReset();
    };

  return (
    <>
      <h2>Agregar TODO</h2>
      <hr />
      <form onSubmit={ handleSubmit }>
        <input
          className="form-control"
          type="text"
          value={ description }
          onChange={ handleInputChange }
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
        />
        <button
          className="btn btn-outline-primary m-0 mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

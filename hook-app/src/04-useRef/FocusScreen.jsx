import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={inputRef}
            className="form-control"
            placeholder="Su nombre"
        />

        <button
            className="btn btn-outline-primary mt-5"
            onClick={() => {
                inputRef.current.select()
                console.log(inputRef)
            }}
        >
            Focus
        </button>

    </>
  )
}

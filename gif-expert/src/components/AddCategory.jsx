import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        
        if (input.trim().length < 2) {
            return;
        }

        onNewCategory(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} name="form">
            <input 
                type="text" 
                name="category" 
                id="cat" 
                value={input} 
                onChange={handleInput}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
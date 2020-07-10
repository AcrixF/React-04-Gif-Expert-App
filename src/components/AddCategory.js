import React, { useState } from 'react';

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Brenda Marlen')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange = { handleInputChange }/>
        </form>
    );
};

export default  AddCategory;
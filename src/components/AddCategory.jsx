import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({newCategory}) => {
    const [input, setInput] =  useState('');
    

    const handleInputAdd = ({target})=>{
        setInput(target.value);
    }
    

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(input.trim().length<=1) return;

        newCategory(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
                onChange={handleInputAdd} 
                value={input} 
                placeholder='Search Gifs'>
            </input>
        </form>
    )
}


AddCategory.propTypes = {
    newCategory:PropTypes.func.isRequired
}
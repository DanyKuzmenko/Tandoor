import React from 'react';
import './Input.scss';

const Input = () => {
    return (
        <div className='input__wrapper'>
            <input
                className='input'
            />
            <button className='input__search-button' />
        </div>
    );
};

export default Input;

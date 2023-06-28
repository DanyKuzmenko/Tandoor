import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = ({placeholder}) => {
    return (
        <div className='input__wrapper'>
            <input
              placeholder={placeholder}
                className='input'
            />
            <button className='input__search-button' />
        </div>
    );
};

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input;

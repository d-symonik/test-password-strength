import React from 'react';
import classes from './Input.module.scss';

function Input(props) {
  const {
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    className,
  } = props;

  const inputStyles = `${classes.input} ${className}`;
  const inputHandler = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={inputStyles}>

      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        onChange={inputHandler}
        onBlur={onBlur}
      />
    </div>
  );
}

export default Input;

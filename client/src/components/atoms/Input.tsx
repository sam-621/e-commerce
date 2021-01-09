import React from 'react';
import '../../styles/atoms/input.css';
import {InputParams} from './interfaces'

const Input = ({type, setValue, placeHolder, value}: InputParams) => {
  return (
    <div className="EditInputText-Container">
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
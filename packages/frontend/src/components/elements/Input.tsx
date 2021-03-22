import React from 'react';
import '../../styles/elements/input.css';
import { InputParams } from './interfaces';

const Input = ({ type, setValue, placeHolder, value }: InputParams) => {
  return (
    <label className="EditInputText-Container">
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        value={value}
        required
      />
    </label>
  );
};

export default Input;

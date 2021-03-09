import React from 'react';
import '../../styles/atoms/userInput.css';

const UserInput = ({ label, type, placeHolder = '', value, setValue }: IUserInputProps) => {
  return (
    <div className="UserInput">
      <label htmlFor={label}>
        <span>{label}</span>
        <input
          id={label}
          type={type}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeHolder}
          value={value}
          required
        />
      </label>
    </div>
  );
};

export default UserInput;

interface IUserInputProps {
  label: string;
  type: string;
  placeHolder?: string;
  value: string;
  setValue: any;
}

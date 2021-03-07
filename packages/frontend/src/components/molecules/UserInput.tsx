import React from 'react';

const UserInput = ({ label, type, placeHolder, value, setValue }: any) => {
  return (
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
  );
};

export default UserInput;

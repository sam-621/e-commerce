import { FC } from 'react';

const Input: FC<IInputProps> = ({ label, type, onChange, value, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} required onChange={onChange} value={value} />
    </div>
  );
};

interface IInputProps {
  label: string;
  type: string;
  onChange: () => void;
  value: string;
  id: string;
}

export default Input;

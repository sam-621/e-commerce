import { FC } from 'react';

const Input: FC<IInputProps> = ({ label, type, onChange, value, id, hasError, errorMessage }) => {
  return (
    <div className={`Input ${hasError ? 'input-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} required onChange={onChange} value={value} />
      {hasError && <span role="alert">{errorMessage}</span>}
    </div>
  );
};

interface IInputProps {
  label: string;
  type: 'text' | 'password';
  onChange: (e: any) => void;
  value: string;
  id: string;
  hasError?: boolean;
  errorMessage?: string | JSX.Element;
}

export default Input;

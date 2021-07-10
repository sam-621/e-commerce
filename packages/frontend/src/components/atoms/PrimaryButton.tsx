import { FC } from 'react';

const PrimaryButton: FC<IPrimaryButtonProps> = ({ onClick, text, type }) => {
  return (
    <button className="PrimaryButton" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

interface IPrimaryButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => unknown;
}

export default PrimaryButton;

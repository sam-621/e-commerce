const PrimaryButton = ({ onClick, text, type }: IPrimaryButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

interface IPrimaryButtonProps {
  text: string;
  onClick: () => unknown;
  type: 'button' | 'submit' | 'reset';
}

export default PrimaryButton;

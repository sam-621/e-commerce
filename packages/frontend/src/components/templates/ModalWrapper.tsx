import { FC, useState } from 'react';

const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpenProp }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  if (!isOpen) return null;

  return (
    <div className="ModalWrapper">
      <div className="ModalContent">
        <div className="ModalContent-close">
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

interface IModalWrapperProps {
  isOpenProp: boolean;
}

export default ModalWrapper;

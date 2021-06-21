import { FC, useState } from 'react';

const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpenProp }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="ModalWrapper" onClick={closeModal}>
      <div className="ModalContent">
        <div className="ModalContent-close">
          <button onClick={closeModal}>X</button>
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

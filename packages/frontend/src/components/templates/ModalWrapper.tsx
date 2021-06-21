import { FC, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useCLickOutside';

const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpenProp }) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const closeModal = () => setIsOpen(false);

  useClickOutside(modalRef, closeModal);

  if (!isOpen) return null;

  return (
    <div className="ModalWrapper">
      <div className="ModalContent" ref={modalRef}>
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

import { FC, useEffect, useRef, useState } from 'react';
import useClickOutside from '@Hooks/useCLickOutside';

const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpenProp }) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const disableScroll = () => window.scrollTo(0, 0);
  const closeModal = () => setIsOpen(false);

  useClickOutside(modalRef, closeModal);

  useEffect(() => {
    if (isOpen) window.addEventListener('scroll', disableScroll);

    return () => {
      window.removeEventListener('scroll', disableScroll);
    };
  }, [isOpen]);

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

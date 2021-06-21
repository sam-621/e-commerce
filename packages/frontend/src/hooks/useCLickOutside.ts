import { MutableRefObject, useEffect } from 'react';

const useClickOutside: IUseClickOutside = (ref, callback) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLInputElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

interface IUseClickOutside {
  (ref: MutableRefObject<HTMLInputElement>, callback: () => void): void;
}

export default useClickOutside;

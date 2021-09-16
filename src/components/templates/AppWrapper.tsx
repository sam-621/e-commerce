import fillStore from '@Redux/fillStore';
import { IAction } from '@Types/redux';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const AppWrapper: FC = ({ children }) => {
  const dispatch = useDispatch<Dispatch<IAction>>();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fillStore(dispatch);
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AppWrapper;

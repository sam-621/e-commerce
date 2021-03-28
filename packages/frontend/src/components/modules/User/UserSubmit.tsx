import React from 'react';
import '../../../styles/atoms/userSubmit.css';
import Loader from '../../elements/Loader';

const UserSubmit = ({ isLoading }: IUserSubmitProps) => {
  return (
    <div className="UserSubmit">
      {isLoading ? <Loader /> : <input type="submit" value="Save" />}
    </div>
  );
};

interface IUserSubmitProps {
  isLoading?: boolean;
}

export default UserSubmit;

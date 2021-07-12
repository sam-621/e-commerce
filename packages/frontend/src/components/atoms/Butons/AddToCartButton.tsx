import { redirect } from '@Helpers/redirect';
import { IReduxState } from '@Types/redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const AddToCartButton = () => {
  const isLogged = useSelector<IReduxState>((state) => state.user.isLogged) as boolean;
  const router = useRouter();

  return (
    <button
      className="AddToCartButton"
      type="button"
      onClick={isLogged ? null : () => redirect(router, '/login')}
    >
      <img src="/images/add.svg" width={20} height={20} />
    </button>
  );
};

export default AddToCartButton;

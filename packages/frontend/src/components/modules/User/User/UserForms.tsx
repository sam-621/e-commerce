import React, { useEffect, useState } from 'react';
import '../../../../styles/containers/userForms.css';

import BasicInfo from './BasicInfo';
import UserProducts from './UserProducts';
import { IProduct } from '../../../../context/interfaces';
import { get } from '../../../../utils/petitions';
import Cookies from 'universal-cookie';
import { Loader } from '../../../elements';

const UserForms = () => {
  const cookie = new Cookies();
  const token: string = cookie.get('token');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [productsBought, setProductsBought] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getUserInfo() {
    setIsLoading(true);
    const res = await get('/user', { headers: { authorization: token } });
    const info = res.data.data as IUserInfo;
    setUsername(info.username);
    setEmail(info.email);
    setProductsBought(info.productsBought);
    setCartProducts(info.cart);
    setIsLoading(false);
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <main className="UserForms">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BasicInfo email={email} username={username} />
          <hr />
          <UserProducts productsBought={productsBought} cartProducts={cartProducts} />
        </>
      )}
    </main>
  );
};

export default UserForms;

interface IUserInfo {
  cart: IProduct[];
  email: string;
  productsBought: IProduct[];
  username: string;
  _id: string;
}

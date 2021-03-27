import React, { useEffect, useState } from 'react';
import '../../styles/containers/products.css';
import '../../styles/toastify.css';

import { get } from '../../utils/petitions';
import { Product } from '.';
import { Loader } from '.';
import { IProduct } from '../../context/interfaces';
import { HTTPException } from '../../utils/HttpException';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';

const Products = ({ url = '/products', products }: IProductsProps) => {
  const [data, setData] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const isGeneric: boolean = url === '/products';

  async function getProducts(): Promise<void> {
    try {
      setLoading(true);

      if (isGeneric) {
        const res = await get(url);
        setData(res.data.data);
      } else {
        const res = await get(url, { headers: { authorization: new Cookies().get('token') } });
        setData(res.data.data.productsBought);
      }
      setLoading(false);
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg = httpException.getProductsMessage();
      alert(msg);

      setLoading(false);
    }
  }

  useEffect(() => {
    if (!products) {
      getProducts();
    }
    setData(products);
  }, []);

  return (
    <main className="Products">
      {loading ? (
        <Loader border="5px" width="30px" height="30px" />
      ) : (
        <>
          {data.map((prod: IProduct) => {
            return (
              <Product
                key={prod._id}
                image={prod.image}
                id={isGeneric ? prod._id : prod.frontID}
                description={prod.description}
                price={prod.price}
                name={prod.name}
                isUserProducts={products ? false : isGeneric}
              />
            );
          })}
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </main>
  );
};

export default Products;

interface IProductsProps {
  url?: string;
  products?: IProduct[];
}

import React, { useEffect, useState } from 'react';
import '../../styles/containers/products.css';
import '../../styles/toastify.css';

import AxiosInstance from '../../utils/Axios';
import { Product } from '../molecules';
import { Loader } from '../atoms';
import { IProduct } from '../../context/interfaces';
import { HTTPException } from '../../utils/HttpException';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [data, setData] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getProducts(): Promise<void> {
    try {
      setLoading(true);

      const res = await AxiosInstance.get('/products');
      setData(res.data.data);
      setLoading(false);
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg = httpException.getProductsMessage();
      alert(msg);

      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
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
                id={prod._id}
                description={prod.description}
                price={prod.price}
                name={prod.name}
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

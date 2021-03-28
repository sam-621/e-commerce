import React, { useEffect, useState } from 'react';
import '../../styles/containers/products.css';
import '../../styles/toastify.css';

import { get } from '../../utils/petitions';
import { Loader, Product } from '.';
import { IProduct } from '../../context/interfaces';
import { HTTPException } from '../../utils/HttpException';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ products = [] }: IProductsProps) => {
  const [data, setData] = useState<Array<IProduct>>(products);
  const areThereAlreadyProducts = products.length > 0;

  const [loading, setLoading] = useState<boolean>(false);

  async function getProducts(): Promise<void> {
    try {
      setLoading(true);

      if (areThereAlreadyProducts) {
        setLoading(false);
        return;
      }

      const res = await get('/products');

      setData(res.data.data);
      setLoading(false);
    } catch (e) {
      const httpException = new HTTPException(e.message);
      const msg = httpException.getProductsMessage();
      toast.error(msg);

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
                id={areThereAlreadyProducts ? prod.frontID : prod._id}
                description={prod.description}
                price={prod.price}
                name={prod.name}
                isUserProducts={areThereAlreadyProducts}
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
  products?: IProduct[];
}

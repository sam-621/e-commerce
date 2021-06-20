import { FC, useEffect } from 'react';
import ProductServices from '../../services/ProductServices';
import { IProduct } from '../../types/products';
import ProductsCarousel from '../templates/ProductsCarousel';

const ProductsHome: FC<IProductsHomeProps> = ({ guajolotas, drinks, tamales }) => {
  useEffect(() => {
    const fetch = async () => {
      const service = new ProductServices();
      const res = await service.getAllProducts();
      console.log(res);
    };
    fetch();
  });

  return (
    <>
      <ProductsCarousel products={guajolotas} />
      {/* <ProductsCarousel products={drinks} /> */}
      {/* <ProductsCarousel products={tamales} /> */}
    </>
  );
};

interface IProductsHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default ProductsHome;

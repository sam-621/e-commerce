import { FC } from 'react';
import { mediaFrom1440 } from '../../helpers/mediaQueries';
import { useMedia } from '../../hooks/useMedia';
import { IProduct } from '../../types/products';
import ProductsCarousel from '../containers/Mobile/ProductsCarousel';
import ProductsDesktopList from '../containers/Desktop/ProductsDesktopList';

const ProductsHome: FC<IProductsHomeProps> = ({ guajolotas, drinks, tamales }) => {
  const isNotDesktop = useMedia(mediaFrom1440);
  return (
    <section className="ProductsHome">
      {isNotDesktop ? (
        <>
          <ProductsCarousel products={guajolotas} text="Guajolotas" />
          <ProductsCarousel products={drinks} text="Drinks" />
          <ProductsCarousel products={tamales} text="Tamales" />
        </>
      ) : (
        <>
          <ProductsDesktopList products={guajolotas} text="Guajolotas" />
          <ProductsDesktopList products={drinks} text="Drinks" />
          <ProductsDesktopList products={tamales} text="Tamales" />
        </>
      )}
    </section>
  );
};

interface IProductsHomeProps {
  guajolotas?: IProduct[];
  drinks?: IProduct[];
  tamales?: IProduct[];
}

export default ProductsHome;

import { FC } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.scss';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';

const ProductsCarousel: FC<IProductsCarouselProps> = ({ products }) => {
  return (
    <Swiper tag="section" slidesPerView={3} navigation>
      {products.map((item) => (
        <Product
          id={item.id}
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </Swiper>
  );
};

interface IProductsCarouselProps {
  products: IProduct[];
}

export default ProductsCarousel;

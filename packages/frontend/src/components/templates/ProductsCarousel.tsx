import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';

const ProductsCarousel: FC<IProductsCarouselProps> = ({ products }) => {
  return (
    <Swiper tag="section" slidesPerView={2} spaceBetween={15} style={{ padding: '0 10px' }}>
      {products?.map((item) => (
        <SwiperSlide>
          <Product
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface IProductsCarouselProps {
  products: IProduct[];
}

export default ProductsCarousel;

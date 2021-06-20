import { FC } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../types/products';
import Product from '../molecules/Product';

SwiperCore.use([Navigation, Scrollbar, Pagination, EffectCoverflow]);

const ProductsCarousel: FC<IProductsCarouselProps> = ({ products }) => {
  return (
    <Swiper
      tag="section"
      slidesPerView={2}
      spaceBetween={15}
      style={{ padding: '0 10px' }}
      pagination={{ dynamicBullets: true }}
      lazy={false}
    >
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

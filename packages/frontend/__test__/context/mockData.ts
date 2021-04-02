import { IProduct } from '../../src/context/interfaces';

const mockProduct: IProduct = {
  frontID: 6,
  _id: '6',
  image: 'https://arepa.s3.amazonaws.com/hoodie.png',
  name: 'Hoodie',
  price: 35,
  description: 'Una sudadera muy espectacular',
};

const mockProducts: IProduct[] = [
  {
    frontID: 1,
    _id: '1',
    image: 'https://arepa.s3.amazonaws.com/camiseta.png',
    name: 'Camiseta',
    price: 25,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    frontID: 2,
    _id: '2',
    image: 'https://arepa.s3.amazonaws.com/mug.png',
    name: 'Mug',
    price: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    frontID: 3,
    _id: '3',
    image: 'https://arepa.s3.amazonaws.com/pin.png',
    name: 'Pin',
    price: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    frontID: 4,
    _id: '4',
    image: 'https://arepa.s3.amazonaws.com/stickers1.png',
    name: 'Stickers',
    price: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    frontID: 5,
    _id: '5',
    image: 'https://arepa.s3.amazonaws.com/stickers2.png',
    name: 'Stickers',
    price: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export { mockProducts, mockProduct };

interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ICartProducts {
  _id: string;
  cart: IProduct[];
}

export { IProduct, ICartProducts };

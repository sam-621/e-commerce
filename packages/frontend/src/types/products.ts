export interface IProduct {
  id: number;
  name: string;
  flavor: string;
  description: string;
  price: number;
  image: string;
}

export interface IAllProducts {
  guajolotas: IProduct[];
  bebidas: IProduct[];
  tamales: IProduct[];
}

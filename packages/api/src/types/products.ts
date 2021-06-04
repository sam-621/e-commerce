export interface IProduct {
  id: number;
  frontId: number;
  name: String;
  flavor: String;
  description: String;
  price: number;
  image: String;
}

export interface IAllProducts {
  guajolotas: IProduct[];
  bebidas: IProduct[];
  tamales: IProduct[];
}

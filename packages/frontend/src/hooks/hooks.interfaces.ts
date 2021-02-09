export interface IProducts {
  id: string;
  image: string;
  description: string;
  price: number;
  title: string;
}

export interface IFetchedData {
  data: IProducts[];
  loading: boolean;
}

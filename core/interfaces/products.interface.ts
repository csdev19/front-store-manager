export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[] | Blob[];
  frontImage: string | Blob;
  isVisible: boolean;
  categories: number[];
}

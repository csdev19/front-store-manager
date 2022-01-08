export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  images: string[];
  frontImage: string;
  isVisible: boolean;
}

export interface IProductCreate {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  images: Blob[];
  frontImage: Blob;
  isVisible: boolean;
}

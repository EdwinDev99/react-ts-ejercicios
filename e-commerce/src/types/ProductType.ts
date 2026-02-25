export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartItem = ProductType & {
  quantity: number;
};

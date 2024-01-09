export type Root = {
  status: string;
  data: PizzaType[];
};

export type PizzaType = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};
export type PizzaCartType = {
  cart: Array<{
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }>;
};

export type userType = {
  user: {
    username: string;
  };
};

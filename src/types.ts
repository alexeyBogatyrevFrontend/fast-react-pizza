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
    status: string;
    position: {
      latitude: string;
      longitude: string;
    };
    address: string;
    error: string;
  };
};

export type RootOrderType = {
  status: string;
  data: Data;
};

export type Data = {
  customer: string;
  status: string;
  priority: boolean;
  cart: Cart[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
};

export type Cart = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addIngredients: any[];
  removeIngredients: any[];
};

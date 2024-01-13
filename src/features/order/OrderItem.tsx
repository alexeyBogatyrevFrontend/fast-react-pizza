import { FC } from "react";
import { Cart } from "../../types";
import { formatCurrency } from "../../utils/helpers";

type OrderItemType = {
  item: Cart;
  isLoadingIngredients: boolean;
  ingredients: any[];
};

const OrderItem: FC<OrderItemType> = ({
  item,
  // isLoadingIngredients,
  // ingredients,
}) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;

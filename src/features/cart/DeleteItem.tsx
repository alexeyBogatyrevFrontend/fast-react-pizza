import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { FC } from "react";

type DeleteItemType = {
  pizzaId: number;
};

const DeleteItem: FC<DeleteItemType> = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;

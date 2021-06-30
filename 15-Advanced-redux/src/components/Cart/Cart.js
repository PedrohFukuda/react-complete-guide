import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartContent = cartItems.map((item) => {
    return (
      <CartItem
        item={{
          title: item.name,
          quantity: item.quantity,
          total: item.price * item.quantity,
          price: item.price,
          id: item.id,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartContent}</ul>
    </Card>
  );
};

export default Cart;

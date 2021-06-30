import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

import { uiActions } from "../../store/slices/ui";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = (e) => {
    if (isCartVisible) {
      dispatch(uiActions.hideCart());
      return;
    }
    dispatch(uiActions.showCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

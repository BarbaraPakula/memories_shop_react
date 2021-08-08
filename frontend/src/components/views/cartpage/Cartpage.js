import React from "react";
import styles from "./Cartpage.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutButton from "../../common/checkoutButton/CheckoutButton";

// Components
import CartItem from "../../common/CartItem/CartItem";

// Actions
import { addToCart, removeFromCart } from "../../../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartpage}>
      <div className={styles.cartpage__left}>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))
        )}
      </div>

      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;

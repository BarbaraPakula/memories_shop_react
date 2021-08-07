import React from 'react';
import styles from './Cartpage.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


// Components

import CartItem from '../../common/CartItem/CartItem';

// Actions
import { addToCart, removeFromCart } from '../../../redux/cartReducer';

const Cart = (props) => {
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
    <div className={styles.root}>
      <div>
        <h3>Cart to remove  Statycznie do podglądu</h3>
        <div>
          <CartItem />
        </div>
      </div>
      <>
        <div className='cartscreen'>
          <div className='cartscreen__left'>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to='/'>Go Back</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>

          <div className='cartscreen__right'>
            <div className='cartscreen__info'>
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Cart;

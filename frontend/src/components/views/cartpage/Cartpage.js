import React from 'react';
import styles from './Cartpage.scss';
import  CartItem from '../../common/CartItem/CartItem'


const Cart = (props) => {
  return (
    <div className={styles.root}>
      <div>
        <h3>Cart</h3>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;
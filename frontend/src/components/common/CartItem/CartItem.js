import React from 'react';
import styles from './CartItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const propTypes = {};

const defaultProps = {
  imageUrl:
    'https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Heaven',
  price: 120,
  countInStock: 3,
};

const CartItem = (item, qtyChangeHandler, removeHandler) => {
  return (
    <div className={styles.cartitem}>
      <div className={styles.cartitem__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link
        to={`/product/${item.product}`}
        className={styles.cartitem__cartItem__name}
      >
        <p>{item.name}</p>
      </Link>
      <p className={styles.cartitem__cartitem__price}>${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className={styles.cartitem__cartItem__cartItem__select}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className={styles.cartItem__deleteBtn}
        onClick={() => removeHandler(item.product)}
      >
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;

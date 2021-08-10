import React from "react";
// import PropTypes from 'prop-types'
import styles from "./Order.module.scss";

// Components
import OrderForm from "../../common/orderForm/OrderForm";
import CheckoutButton from "../../common/checkoutButton/CheckoutButton";

function Order(props) {
  return (
    <div className={styles.order}>
      <OrderForm />

      <CheckoutButton />
    </div>
  );
}

// Order.propTypes = {

// }

export default Order;

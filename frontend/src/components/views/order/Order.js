import React from "react";
import styles from "./Order.module.scss";

// Components
import OrderForm from "../../common/orderForm/OrderForm";

function Order(props) {
  return (
    <div className={styles.order}>
      <OrderForm />
    </div>
  );
}

export default Order;

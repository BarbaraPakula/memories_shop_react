import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
// import PropTypes from "prop-types";
import styles from "./OrderForm.module.scss";
import { useSelector } from "react-redux";
import CheckoutButton from "../../common/checkoutButton/CheckoutButton";

const OrderForm = ({ imageUrl }) => {
  const order = useSelector((state) => state.cart);
  const { cartItems } = order;

  useEffect(() => {}, []);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const [username, setUserName] = useState("");
  const [usersurname, setUserSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    setSuccess();
    const registerd = {
      username,
      usersurname,
      phone,
      email,
      text,
      totalPrice: getCartSubTotal(),
      subtotalItems: getCartCount(),
      orderDetails: cartItems.map(
        (cartItem) =>
        cartItem.name + " " + cartItem.qty
      ),
    };

    if (username && usersurname && email && phone) {
      axios
        .post("http://localhost:8000/api/orders", registerd)
        .then((response) => console.log(response.data));
      setUserName("");
      setUserSurname("");
      setPhone("");
      setEmail("");
      setText("");
      setSuccess(true);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cartpage}>
        <fieldset>
          <legend>Order deatails</legend>
          {cartItems.length === 0 ? (
            <Alert severity="info">
              Your Cart Is Empty <Link to="/">Go Back to shop</Link>
            </Alert>
          ) : (
            cartItems.map((item) => (
              <input
                readOnly
                key={item.id}
                value={item.name + " (" + item.qty + ") " + item.price + "$"}
              ></input>
            ))
          )}

          <div>
            <hr></hr>
            <input readOnly value={`Subtotal items: ${getCartCount()}`}></input>
            <input
              readOnly
              value={`Total Price $: ${getCartSubTotal()}`}
            ></input>
          </div>
          <fieldset>
            <legend>Fill the form </legend>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="First name"
              required
            />

            <input
              type="text"
              onChange={(e) => setUserSurname(e.target.value)}
              value={usersurname}
              placeholder="Last name"
              required
            />

            <input
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone"
              required
            />

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
              required
            />
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              name="text"
              placeholder="text"
              rows="4"
              cols="50"
            ></textarea>
          </fieldset>

          <fieldset>
            <legend>Choose your shipping options</legend>
            <input type="radio" name="delivery_agency" value="DPD" />
            DPD
            <input type="radio" name="delivery_agency" value="FedEx" />
            FedEx
            <input
              type="radio"
              name="delivery_agency"
              value="UPS"
              checked
              readOnly
            />
            UPS
          </fieldset>

          <button type="submit">Submit</button>
          {success && (
            <Alert color="success">
              You've booked your product! Go to checkout and pay your bill.
              <CheckoutButton />
            </Alert>
          )}
          {error && (
            <Alert color="warning">
              There are some errors in you form. Have you fill all the fields?
            </Alert>
          )}
        </fieldset>
      </div>
    </form>
  );
};
// OrderForm.propTypes = {};

export default OrderForm;

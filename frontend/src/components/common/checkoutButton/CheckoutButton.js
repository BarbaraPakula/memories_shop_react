import React from "react";

const propTypes = {};

const defaultProps = {};

const CheckoutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:8000/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [
                { id: 1, quantity: 3 },
                { id: 2, quantity: 1 },
              ],
            }),
          })
            .then((res) => {
              if (res.ok) return res.json();
              return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
              window.location = url;
              console.log(url);
            })
            .catch((e) => {
              console.error(e.error);
            });
        }}
      >
        Checkout:go to payments
      </button>
    </div>
  );
};

CheckoutButton.propTypes = propTypes;
CheckoutButton.defaultProps = defaultProps;

export default CheckoutButton;

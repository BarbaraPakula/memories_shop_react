import React from "react";
import { useForm } from "react-hook-form";

// import PropTypes from "prop-types";

const OrderForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true, maxLength: 15 })}
      />
      <p>{errors.firstName?.type === "required" && "First name is required"}</p>
      <p>{errors.firstName?.type === "maxLength" && "First name is to long"}</p>
      <input
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true, maxLength: 15 })}
      />
      <p>{errors.lastName?.type === "required" && "Last name is required"}</p>
      <p>{errors.lastName?.type === "maxLength" && "Last name is to long"}</p>
      <input
        type="phone"
        placeholder="Phone"
        {...register("phone", { required: true, maxLength: 15 })}
      />
      <p>{errors.phone?.type === "required" && "Phone name is required"}</p>
      <p>{errors.phone?.type === "maxLength" && "Phone Name is to long"}</p>
      <input
        type="email"
        placeholder="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      <p>{errors.email?.type === "required" && "Emial is required"}</p>

      <button type="submit">Submit</button>
    </form>
  );
};
// OrderForm.propTypes = {};

export default OrderForm;

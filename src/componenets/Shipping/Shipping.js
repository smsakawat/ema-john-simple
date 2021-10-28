import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredData } from "../../utilities/localDb";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const storedData = getStoredData();
    data.order = storedData;
    fetch("https://secure-hamlet-67389.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Confirmed Successfully");
          reset();
          clearTheCart();
        }
      });
  };
  const { user } = useAuth();
  return (
    <div className="shipping-container d-flex justify-content-center align-items-center">
      <form className="shipping-field" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <input
            className="form-control"
            defaultValue={user.displayName}
            {...register("Full-Name")}
          />
          <input
            className="form-control"
            defaultValue={user.email}
            {...register("Email")}
          />
          <input
            className="form-control"
            type="number"
            placeholder="Phone Number"
            {...register("Phone", { required: true })}
          />
          {errors.Password && (
            <span className="text-danger ms-3">This field is required</span>
          )}
          <input
            className="form-control"
            placeholder="Adress"
            {...register("Adress")}
          />
          <input
            className="form-control"
            placeholder="City"
            {...register("City")}
          />
          <input className="form-control form-btn" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Shipping;

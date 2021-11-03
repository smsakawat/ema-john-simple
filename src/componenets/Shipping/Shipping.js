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
    data.orderTime = new Date();
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
            {...register("name")}
          />
          <input
            className="form-control"
            defaultValue={user.email}
            {...register("email")}
          />
          <input
            className="form-control"
            type="number"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />
          {errors.Password && (
            <span className="text-danger ms-3">This field is required</span>
          )}
          <input
            className="form-control"
            placeholder="Adress"
            {...register("adress")}
          />
          <input
            className="form-control"
            placeholder="City"
            {...register("city")}
          />
          <input
            className="form-control form-btn"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;

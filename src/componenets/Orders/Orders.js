import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
          //   why should i use 404 here rather than 401???
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <>
      <div>Total Orders: {orders?.length}</div>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Orderer email: {order.email}</p>
        </div>
      ))}
    </>
  );
};

export default Orders;

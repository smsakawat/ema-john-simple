import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          history.push("/login");
        }
      })
      .then((data) => {
        setOrders(data);
        console.log(orders);
      })
      .catch("something wrong happened");
  }, [user.email, history, orders]);
  return (
    <>
      <div>Total Orders: {orders?.length}</div>
      {orders?.map((order) => (
        <div key={order._id}>
          <p>Orderer email: {order.email}</p>
          <p>{order.name}</p>
        </div>
      ))}
    </>
  );
};

export default Orders;

import { useEffect, useState } from "react";
import { getStoredData } from "../utilities/localDb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedData = getStoredData();
    const keys = Object.keys(storedData);
    //    loading data from server based on keys saved in local db
    fetch("https://secure-hamlet-67389.herokuapp.com/products/bykeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        // declar an array for storing selected items,we can use push or pop here because it's a normal array but we can't use this methods in state-array to set a state
        const selectedCarts = [];

        for (const key in storedData) {
          const addedItem = products.find((product) => product.key === key);

          if (addedItem) {
            const quantity = storedData[key];
            addedItem.quantity = quantity;
            selectedCarts.push(addedItem);
          }
        }
        setCart(selectedCarts);
      });
  }, []);

  return [cart, setCart];
};
export default useCart;

import { useEffect, useState } from "react";

// like this we can use hooks in a different file and we can use it in multiple componenets..so whenever we need to use same hooks in multiple componenets we will use a external file like this to make our life easy
const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://secure-hamlet-67389.herokuapp.com/roducts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  // return necessary things...we can return only a single thing but to get more then one item we need wrap it in object or array
  return [products, setProducts];
};

export default useProducts;

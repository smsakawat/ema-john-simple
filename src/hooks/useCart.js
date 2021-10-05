import { useEffect, useState } from "react";
import { getStoredData } from "../utilities/localDb";

const useCart = (products) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const savedData = getStoredData();
            const selectedProducts = [];
            for (const key in savedData) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedData[key];
                    addedProduct.quantity = quantity;
                    selectedProducts.push(addedProduct);


                }

            }
            setCart(selectedProducts);
        }


    }, [products])
    // same function takhe ki duibar return hocce??
    return [cart, setCart];

}
export default useCart;
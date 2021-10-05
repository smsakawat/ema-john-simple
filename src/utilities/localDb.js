// load data from local storage
export const addToDb = (id) => {
    const data = getDb();
    let shoppingCart = {};
    if (!data) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(data)
        if (shoppingCart[id]) {
            shoppingCart[id] = shoppingCart[id] + 1;
        }
        else {
            shoppingCart[id] = 1;
        }
    }

    updateDb(shoppingCart)
}

// get stored date from local storage
export const getStoredData = () => {
    const data = localStorage.getItem('Cart_data');
    return data ? JSON.parse(data) : {};
}

// collect data form local storage
const getDb = () => {
    const localData = localStorage.getItem('Cart_data');
    return localData;
}
const updateDb = (cart) => {
    localStorage.setItem('Cart_data', JSON.stringify(cart));
}

export const removeItem = (key) => {
    const savedData = getStoredData();
    delete savedData[key];
    updateDb(savedData);

}
// we can also export all funtions together..
export const clearDb = () => {
    localStorage.removeItem('Cart_data');
}


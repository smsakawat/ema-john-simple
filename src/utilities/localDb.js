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

// collect data form loca storage
const getDb = () => {
    const localData = localStorage.getItem('Cart_data');
    return localData;
}
const updateDb = (cart) => {
    localStorage.setItem('Cart_data', JSON.stringify(cart));
}
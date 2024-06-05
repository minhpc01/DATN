import * as actionTypes from "./type";

export const FETCH_DATA_LOGIN = () => {
    return {
        type: actionTypes.FETCH_DATA_LOGIN,
    };
};
export const FETCH_DATA_SUCCESS = (idAccount, username, token) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        username: username,
        idAccount: idAccount,
        token: token,
    };
};
export const FETCH_DATA_ERROR = () => {
    return {
        type: actionTypes.FETCH_DATA_ERROR,
    };
};
export const LOGOUT = () => {
    return {
        type: actionTypes.LOGOUT,
        cart: []
    };
};
export const INITIAL_CART_REDUX = (cart) => {
    return {
        type: actionTypes.INITIAL_CART_REDUX,
        cart: cart
    }
}
export const INITIAL_CARTALL_REDUX = (cart) => {
    return {
        type: actionTypes.INITIAL_CARTALL_REDUX,
        cart: cart
    }
}
export const INITIAL_LIST_PRODUCT = (listProduct) => {
    return {
        type: actionTypes.INITIAL_LIST_PRODUCT,
        listProduct: listProduct
    }
}
export const INCREASE = (idProduct) => {
    return {
        type: actionTypes.INCREASE,
        idProduct: idProduct
    }
}
export const DECREASE = (idProduct) => {
    return {
        type: actionTypes.DECREASE,
        idProduct: idProduct
    }
}
export const DELETE_CART = (idProduct) => {
    return {
        type: actionTypes.DELETE_CART,
        idProduct: idProduct
    }
}
export const ADD_TO_CART = (product, qty) => {
    console.log('product: ', product)
    return {
        // type: actionTypes.ADD_TO_CART,
        // payload: {

        //     // //Carts: { ...product.Carts, Cart_Detail: { ...product.Carts.Cart_detail, qty } }
        //     Products: { Cart_Detail: {} }
        // }
    }
    //  product: product
}

export const SET_CART = () => {
    return {
        type: actionTypes.ADD_TO_CART,
        cart: []
    }
}
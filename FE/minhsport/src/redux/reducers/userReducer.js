import * as actionTypes from "../actions/type";

const INITIAL_STATE = {
    account: {
        username: "",
        idAccount: "",
        auth: false,
        token: "",
    },
    cart: localStorage.getItem("cart")
        ? JSON.parse(sessionStorage.getItem("cart"))
        : [],
    cartAll: [],
    listProduct: [],
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                account: {
                    idAccount: action.idAccount,
                    username: action.username,
                    auth: true,
                    token: action.token,
                },
                isLoading: false,
                isError: false,
            };
        case actionTypes.FETCH_DATA_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem("token");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("account");

            return {
                ...state,
                account: {
                    auth: false,
                    token: "",
                    email: "",
                },
                cart: [...action.cart]
            };

        case actionTypes.INITIAL_CART_REDUX:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id);
            sessionStorage.setItem('cart', JSON.stringify(action.cart))
            return {
                ...state,
                cart: [...action.cart]

            };
        case actionTypes.INITIAL_CARTALL_REDUX:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id);
            return {
                ...state,
                cartAll: [...action.cart]

            };
        case actionTypes.INITIAL_LIST_PRODUCT:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id);
            return {
                ...state,
                listProduct: [...action.listProduct]

            };
        case actionTypes.INCREASE:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x.id === action.idProduct ? { ...x, Products: { ...x.Products, Cart_Detail: { ...x.Products.Cart_Detail, qty: x.Products.Cart_Detail.qty + 1 } } } : x
                ),
            };
        case actionTypes.DECREASE:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x.id === action.idProduct && x.Products.Cart_Detail.qty > 1 ? { ...x, Products: { ...x.Products, Cart_Detail: { ...x.Products.Cart_Detail, qty: x.Products.Cart_Detail.qty - 1 } } } : x
                ),
            };
        case actionTypes.DELETE_CART:

            return {
                ...state,
                cart: state.cart.filter((x) => x.id !== action.idProduct),
            };
        case actionTypes.ADD_TO_CART:
            console.log('state cart: ', state.cart)
            const newItem = action.payload;
            const existItem = state.cart.find((item) => item.Products.id === newItem.id);
            const cartItems = existItem ? state.cart.map((item) => (item.Products.id === existItem.Products.id ? newItem : item))
                : [...state.cart, newItem];
            sessionStorage.setItem("cart", JSON.stringify(cartItems));
            return { ...state, cart: cartItems };

        default:
            return state;
    }
};

export default userReducer;

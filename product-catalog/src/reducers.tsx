import { createStore } from "redux";

const initialState = {
  productList: [
    {
      name: "Elma",
      picture: "https://picsum.photos/300/300",
      price: 9.99,
      stock: 10,
      id: "0"
    },
    {
      name: "Elma",
      picture: "https://picsum.photos/200/300",
      price: 19.99,
      stock: 5,
      id: "1"
    },
    {
      name: "Armut",
      picture: "https://picsum.photos/301/300",
      price: 9.99,
      stock: 10,
      id: "2"
    },
    {
      name: "Portakal",
      picture: "https://picsum.photos/201/300",
      price: 19.99,
      stock: 5,
      id: "3"
    }
  ],
  cart: []
};

const actionCodes = {
  getProductList: "getProductList",
  addToCart: "addToCart",
  DecreaseAmount: "DecreaseAmount",
  IncreaseAmount: "IncreaseAmount"
};

export const AddToCartReducer = (item) => {
  return { type: actionCodes.addToCart, payload: item };
};

export const DecreaseAmountReducer = (item) => {
  return { type: actionCodes.DecreaseAmount, payload: item };
};

export const IncreaseAmountReducer = (item) => {
  return { type: actionCodes.IncreaseAmount, payload: item };
};

function FindProductInCart(cart, itemId) {
  return cart.find((item) => item.id === itemId);
}

function FindProduct(list, itemId) {
  return list.find((item) => item.id === itemId);
}

function ChangeAmount(list, item, step) {
  return list.map((me) => {
    if (me.id === item.id) {
      var newValue = me.amount + step;
      if (newValue < 1) newValue = 1;
      var tut = { ...me, amount: newValue };
      return tut;
    } else return me;
  });
}

// function RemoveFromCart() {}

function FindItemCountInCart(list) {
  return list.length;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    //   case actionCodes.getProductList:
    //     return { items: products_data };
    case actionCodes.addToCart:
      var cartItem = FindProductInCart(state.cart, action.payload.id);
      if (cartItem) {
        return { ...state, cart: ChangeAmount(state.cart, action.payload, 1) };
      } else {
        return {
          ...state,
          cart: [...state.cart, { id: action.payload.id, amount: 1 }]
        };
      }
    case actionCodes.DecreaseAmount:
      return { ...state, cart: ChangeAmount(state.cart, action.payload, -1) };
    case actionCodes.IncreaseAmount:
      return { ...state, cart: ChangeAmount(state.cart, action.payload, +1) };
  }
  return state;
}

const store = createStore(reducer);

export default reducer;
export { store, FindItemCountInCart, FindProduct };

import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counter";
import authReducer from "./slices/auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

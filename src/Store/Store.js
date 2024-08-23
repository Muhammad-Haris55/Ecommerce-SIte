import { combineReducers, createStore } from "redux";
import { ThunkMiddleware } from "./Middlewares/Thunkmiddleware";
import { MensReducer } from "./MensReducer"
// import { CartSlice, Quantitydecrease, Quantityincrease, Removeitem } from "./CartSlice";
import CartSlice from "./CartSlice";
import { Additem } from "./CartSlice";
import { Attires } from "./Attires"
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        Products: Attires,
        Cart: CartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ThunkMiddleware),
})
export default store

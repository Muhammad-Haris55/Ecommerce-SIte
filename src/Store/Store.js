
import { ThunkMiddleware } from "./Middlewares/Thunkmiddleware";
import CartSlice from "./CartSlice";
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

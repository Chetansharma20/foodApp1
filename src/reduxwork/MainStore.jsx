import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import RegisterReducer from "./RegisterSlice";

let MainStore = configureStore({
    reducer: {
        cart: cartReducer,
        Register: RegisterReducer
    }
})


export default MainStore
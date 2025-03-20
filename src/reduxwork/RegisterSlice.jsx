import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  
userData: {}

}

let RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        RegisterForm: (state, actions)=>{
            // let newItem = {...actions.payload}
            state.userData = {...state.userData, ...actions.payload}
            
        },
        LogOut:(state)=>{state.userData = {} }
        // addItem: (state, actions)=>{
        //   let newItem = {...actions.payload,qty:1}
        //   state.cartItems = [...state.cartItems, newItem]
        //   state.cartItemsCount = state.cartItems.length
  

        },
})

export const{RegisterForm, LogOut} = RegisterSlice.actions

export default RegisterSlice.reducer
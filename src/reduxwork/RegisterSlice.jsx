    import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    userData: {},
    users: []

}

let RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        RegisterForm: (state, actions) => {
            // let newItem = {...actions.payload}
            state.users = [...state.users, actions.payload]

        },
        login: (state, actions) => {
            let { userEmail, userPassword } = actions.payload
            let user = state.users.find((usr) => usr.userEmail == userEmail)
            if (!user) {
                alert('Not Register')
            }

            if (user.userPassword == userPassword) {
                state.userData = user
            }
        },
        LogOut: (state) => { state.userData = {} }
        // addItem: (state, actions)=>{
        //   let newItem = {...actions.payload,qty:1}
        //   state.cartItems = [...state.cartItems, newItem]
        //   state.cartItemsCount = state.cartItems.length


    },
})

export const { RegisterForm, login, LogOut } = RegisterSlice.actions

export default RegisterSlice.reducer
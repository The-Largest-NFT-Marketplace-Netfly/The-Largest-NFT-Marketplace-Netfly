import { createSlice } from "@reduxjs/toolkit";


export interface IAuthSlice { isLogin: boolean; }
const initialState: IAuthSlice = { isLogin: false }

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state) => {
            state.isLogin = !state.isLogin
        }
    }
})

export const { setLogin } = AuthSlice.actions

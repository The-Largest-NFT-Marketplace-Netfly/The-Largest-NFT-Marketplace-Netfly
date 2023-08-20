import { createSlice } from "@reduxjs/toolkit";


export interface ILayoutSlice {
    isActHamburger: boolean;
    isActiveSearchbox: boolean;
    isActiveNotification: boolean;
    isActiveUserProfile: boolean
}


const initialState: ILayoutSlice = {
    isActHamburger: false,
    isActiveSearchbox: false,
    isActiveNotification: false,
    isActiveUserProfile: false,
};

export const LayoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setActiveSearchBox: (state) => {
            return { ...initialState, isActiveSearchbox: !state.isActiveSearchbox }
        },
        setActHamburger: (state) => {
            return { ...initialState, isActHamburger: !state.isActHamburger }
        },
        setActNotification: (state) => {
            return { ...initialState, isActiveNotification: !state.isActiveNotification }
        },
        setActUserProfile: (state) => {
            return { ...initialState, isActiveUserProfile: !state.isActiveUserProfile }
        },
        resetHeader: () => {
            return { ...initialState }
        }
    }
})

export const { setActHamburger, setActiveSearchBox, setActNotification, setActUserProfile, resetHeader } = LayoutSlice.actions

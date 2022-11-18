import { configureStore, createSlice, applyMiddleware, combineReducers } from "@reduxjs/toolkit"

const isAuthenticatedSlice = createSlice({
    name: "authenticated",
    initialState: false,
    reducers: {
        setAuthenticated(state, action) {
            return state, action.payload
        }
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState: '',
    reducers: {
        setCart(state, action) {
            return state, action.payload
        }
    }
})

const bodySimulatorSlice = createSlice({
    name: "bodySimulator",
    initialState: '',
    reducers: {
        setBodySimulator(state, action) {
            return state, action.payload
        }
    }
})

const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        setModal(state, action) {
            return state, action.payload
        }
    }
})

const modalCartSlice = createSlice({
    name: "modalCart",
    initialState: false,
    reducers: {
        setModalCart(state, action) {
            return state, action.payload
        }
    }
})


const drawerSlice = createSlice({
    name: "drawer",
    initialState: false,
    reducers: {
        setDrawer(state, action) {
            return state, action.payload
        }
    }
})

const formregisterSlice = createSlice({
    name: "formRegister",
    initialState: false,
    reducers: {
        setFormRegister(state, action) {
            return state, action.payload
        }
    }
})


const rootReducer = combineReducers({
    authenticated: isAuthenticatedSlice.reducer,
    formRegister: formregisterSlice.reducer,
    bodySimulator: bodySimulatorSlice.reducer,
    modalCart: modalCartSlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    drawer: drawerSlice.reducer

})



const store = configureStore({
    reducer: rootReducer
})

export const { setAuthenticated } = isAuthenticatedSlice.actions
export const { setFormRegister } = formregisterSlice.actions
export const { setModal } = modalSlice.actions
export const { setModalCart } = modalSlice.actions
export const { setBodySimulator } = bodySimulatorSlice.actions
export const { setCart } = cartSlice.actions
export const { setDrawer } = drawerSlice.actions


export default store
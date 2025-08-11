import { configureStore } from "@reduxjs/toolkit";
import statsReducer from '../slices/statsSlice.ts'
import ProductReducer from '../slices/ProductSlice.ts'

export const store=configureStore({
    reducer:{
        stats: statsReducer,
        products:ProductReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;
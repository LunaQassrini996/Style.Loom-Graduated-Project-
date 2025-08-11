import testimonialsReducer from "../slices/testimonialsSlice"; // تأكد من وجود هذا
import { configureStore } from "@reduxjs/toolkit";
import statsReducer from '../slices/statsSlice.ts'
import ProductReducer from '../slices/ProductSlice.ts'
import faqReducer from "../../redux/slices/faqSlice.ts";
import cardReducer from '../slices/cardSlice';
export const store = configureStore({
    reducer: {
        stats: statsReducer,
        products: ProductReducer,
        faqs: faqReducer,
        testimonials: testimonialsReducer,
        cards: cardReducer,
    }
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


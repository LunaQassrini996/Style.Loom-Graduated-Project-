import { configureStore } from "@reduxjs/toolkit";

 import statsReducer from '../slices/statsSlice.ts'
import faqReducer from "../slices/faqSlice";

export const store = configureStore({
  reducer: {
    stats: statsReducer
    faqs: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;


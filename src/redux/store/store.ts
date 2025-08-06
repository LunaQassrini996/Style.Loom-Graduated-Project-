import { configureStore } from "@reduxjs/toolkit";
 import statsReducer from '../../redux/slices/statsSlice.ts'
import faqReducer from "../../redux/slices/faqSlice.ts";

export const store = configureStore({
  reducer: {
    stats: statsReducer,
    faqs: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;


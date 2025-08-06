
import { configureStore } from "@reduxjs/toolkit";
 import statsReducer from '../../redux/slices/statsSlice.ts'
import faqReducer from "../../redux/slices/faqSlice.ts";
import cardReducer from '../slices/cardSlice';
export const store = configureStore({
  reducer: {
    stats: statsReducer,
    faqs: faqReducer,
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch =typeof store.dispatch;


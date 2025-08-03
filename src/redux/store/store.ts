import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../reducers/faqSlice";

export const store = configureStore({
  reducer: {
    faqs: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

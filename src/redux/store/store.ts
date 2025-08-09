import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../slices/faqSlice";
import testimonialsReducer from "../slices/testimonialsSlice"; // تأكد من وجود هذا

export const store = configureStore({
  reducer: {
    faqs: faqReducer,
    testimonials: testimonialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

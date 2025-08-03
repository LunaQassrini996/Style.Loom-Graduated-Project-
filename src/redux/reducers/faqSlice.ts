import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    question: "How can I place an order on StyleLoom?",
    answer:
      "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
  },
  {
    id: 2,
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
  },
  {
    id: 4,
    question: "How do I initiate a return?",
    answer:
      "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order is dispatched, you’ll receive a tracking number via email. Use this number to track your package in real-time on our website.",
  },
  {
    id: 6,
    question: "Do you offer exchanges for products?",
    answer:
      "At this time, we don’t offer direct product exchanges. If you’d like a different item, please initiate a return and place a new order.",
  },
  {
    id: 7,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 8,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 9,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 10,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 11,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 12,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 13,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 14,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 15,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 16,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 17,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 18,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 19,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 20,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 21,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 22,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 23,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 24,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 25,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 26,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 27,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 28,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 29,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
  {
    id: 30,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, id",
  },
];

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export default faqSlice.reducer;

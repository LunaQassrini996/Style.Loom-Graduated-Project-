import { createSlice } from "@reduxjs/toolkit";
import type { Testimonial } from "../../Components/Testimonials/Testimonials";
import custmorImg from "../../../public/assets/Images/Home page photos/custmor1.png";
import custmorImg2 from "../../../public/assets/Images/Home page photos/custmor2.png";
import custmorImg3 from "../../../public/assets/Images/Home page photos/custmor3.png";
import custmorImg4 from "../../../public/assets/Images/Home page photos/custmor4.png";
import custmorImg5 from "../../../public/assets/Images/Home page photos/custmor5.png";
import custmorImg6 from "../../../public/assets/Images/Home page photos/custmor6.png";
import ratingImg from "../../../public/assets/Images/Home page photos/starsContainer.svg";

const initialState: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "New York, USA",
    image: custmorImg,
    rating: ratingImg,
    content:
      "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Mumbai, India",
    image: custmorImg2,
    rating: ratingImg,
    content:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
  },
  {
    id: 3,
    name: "Emily Walker",
    location: "London, UK",
    image: custmorImg3,
    rating: ratingImg,
    content:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
  },
  {
    id: 4,
    name: "Alejandro Martínez",
    location: "Barcelona, Spain",
    image: custmorImg4,
    rating: ratingImg,
    content:
      "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Delhi, India",
    image: custmorImg5,
    rating: ratingImg,
    content:
      "Perfect fit and great quality. These jeans have become my go-to for casual and chic outings.",
  },
  {
    id: 6,
    name: "María Rodríguez",
    location: "Mexico City, Mexico",
    image: custmorImg6,
    rating: ratingImg,
    content:
      "Stylish sneakers that don’t compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
  },
];

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialSlice.reducer;

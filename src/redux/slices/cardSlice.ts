import { createSlice } from '@reduxjs/toolkit';

export interface CardData {
  id: number;
  iconSrc: string;
  imageSrc: string;  
  title: string;
  description: string;
}

const initialState: CardData[] = [
  {
    id: 1,
    iconSrc: "/icons/star.png",
    imageSrc: "/images/iconstar.png",
    title: 'Passionate Craftsmanship',
    description: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 2,
    iconSrc: '/icons/mag2.png',
    imageSrc: '/images/Icon6.png',
    title: 'Fashion Forward',
    description: 'We’re trendsetters, curating styles that empower and inspire confidence.',
  },
  {
    id: 3,
    iconSrc: '/icons/mag3.png',
    imageSrc: '/images/img2.png',
    title: 'Customer-Centric Approach',
    description: 'At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.',
  },
  {
    id: 4,
   iconSrc: '/icons/mag4.png',
    imageSrc: '/images/Icon2.png',
    title: 'Global Inspiration',
    description: 'Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.',
  },
  {
    id: 5,
    iconSrc: '/icons/mag.png',
    imageSrc: '/images/Icon3.png',
    title: 'Empowering Your Style',
    description: 'Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.',
  },
  {
    id: 6,
    iconSrc: '/icons/icon1.png',
    imageSrc: '/images/Icon4.png',
    title: 'Sustainable Practices',
    description: 'StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.',
  },
];

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardSlice.reducer;

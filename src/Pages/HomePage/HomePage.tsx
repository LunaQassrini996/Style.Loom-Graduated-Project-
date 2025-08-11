

import Hero from '../../Components/Hero/Hero'

import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent'

export default function HomePage() {
  
  return (
    <div className='bg-black font-roboto'>
        <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
          <Hero/>
          <ProductDetails/>
          <ProductsComponent/>
        </div>
    </div>
  )
}

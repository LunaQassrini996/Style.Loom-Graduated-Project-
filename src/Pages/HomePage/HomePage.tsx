import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions'
import Hero from '../../Components/Hero/Hero'


export default function HomePage() {
  return (

    <div className=' font-roboto' >
       <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
          <Hero/>
        </div>
      <FaqQuestions/>
    </div>
  )
}

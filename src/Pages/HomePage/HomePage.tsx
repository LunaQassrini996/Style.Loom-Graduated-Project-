
import CardContainer from '../../Components/CardContainer/CardContainer'
import ElevateYourWardrobeSection from '../../Components/ElevateYourWardrobeSection/ElevateYourWardrobeSection'
import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions'
import FashionJourneySection from '../../Components/FashionJourneySection/FashionJourneySection'
import Hero from '../../Components/Hero/Hero'
import Testimonials from '../../Components/Testimonials/Testimonials'


export default function HomePage() {
  return (

    <div className=' font-roboto' >
       <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
          <Hero/>
        </div>
        <CardContainer/>
        <FashionJourneySection/>
        <Testimonials/>
      <FaqQuestions/>
      <ElevateYourWardrobeSection/>

    </div>
  )
}

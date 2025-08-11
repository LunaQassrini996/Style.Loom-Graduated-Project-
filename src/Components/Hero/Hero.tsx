import { useDispatch, useSelector } from "react-redux";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import {  setStatstab } from "../../redux/slices/statsSlice";
import type { RootState } from "../../redux/store/store";
import FilterTabs from "../FilterTabs/FilterTabs";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";


export default function Hero() {
  const dispatch=useDispatch();
  const stats=useSelector((state:RootState)=>state.stats.currentStatsTab)
  return (
    <>
    <div className='2xl:max-w-[1596px] 2xl:rounded-[20px] lg:rounded-2xl rounded-[14px] border-2 border-dashed border-[#262626]  justify-self-center w-full overflow-hidden'>

      <div className="w-full 2xl:h-[624px] min-[390px]:h-[442px] h-[250px] 2xl:bg-[url(/images/hero.png)] min-[390px]:bg-[url(/images/hero2.png)] bg-[url(/images/hero3.png)] bg-bottom bg-cover"></div>
      <div className="w-full  lg:flex  block   relative bg-black  ">
        <div className="absolute top-0 left-[50%] translate-[-50%] 2xl:pt-5 2xl:px-5 min-[390px]:p-[14px] z-50 p-0 bg-black rounded-2xl ">
          <ShopNowBtn full={false} cart={false} text="Shop Now" path={"/products"} />
        </div>
        <div className="lg:w-[50%] h-full  2xl:p-20 lg:p-[60px] pt-[60px] pb-5 px-5 lg:border-r-2 lg:border-b-0 border-b-2 border-dashed border-[#262626] flex flex-col gap-[30px]  ">
          <FilterTabs action={(tabname:string)=>dispatch(setStatstab(tabname))} tabs={["All","Mens", "Womens", "Kids"]}/>
          <h1 className="font-medium 2xl:text-5xl md:text-[38px] text-[28px]  text-white">ELEVATE YOUR STYLE WITH STYLELOOM</h1>
          <p className="text-[18px] leading-[150%] text-[#676665]">Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
        </div>
        <div className="lg:w-[50%] divide-x-2  divide-dashed divide-[#262626] h-full grid grid-cols-2">
          <div className="max-h-[219px] flex justify-center flex-col 2xl:gap-4 lg:gap-3 gap-2.5 2xl:pt-[94px] lg:px-[50px] lg:pb-[50px] lg:pt-[74px] p-[30px] border-b-2  border-dashed border-[#262626] ">
            <h2 className="2xl:text-[50px] lg:text-[34px] text-3xl  font-medium leading-[150%] text-white "><AnimatedNumber value={stats.total} /> +</h2>
            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">Fashion Products</p>
          </div>
          <div className="max-h-[219px] flex justify-center flex-col 2xl:gap-4 lg:gap-3 gap-2.5 2xl:pt-[94px] lg:px-[50px] lg:pb-[50px] lg:pt-[74px] p-[30px] border-b-2  border-dashed border-[#262626] ">
            <h2 className="2xl:text-[50px] lg:text-[34px] text-3xl  font-medium leading-[150%] text-white "><AnimatedNumber value={stats.arrivals} />+</h2>
            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">New arrivals every month.</p>
          </div>
          <div className="max-h-[219px] flex justify-center flex-col 2xl:gap-4 lg:gap-3 gap-2.5 2xl:py-[70px] lg:p-[50px]  p-[30px] border-dashed border-[#262626] ">
            <h2 className="2xl:text-[50px] lg:text-[34px] text-3xl  font-medium leading-[150%] text-white "><AnimatedNumber value={stats.discount} />%</h2>
            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">OFF on select items.</p>
          </div>
          <div className="max-h-[219px] flex justify-center flex-col 2xl:gap-4 lg:gap-3 gap-2.5 2xl:py-[70px] lg:p-[50px]   p-[30px] ">
            <h2 className="2xl:text-[50px] lg:text-[34px] text-3xl  font-medium leading-[150%] text-white "><AnimatedNumber value={stats.satisfaction}/>%</h2>
            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">Customer Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


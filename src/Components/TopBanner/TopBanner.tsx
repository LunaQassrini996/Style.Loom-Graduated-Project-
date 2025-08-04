
import FilterTabs from '../FilterTabs/FilterTabs'

export default function TopBanner({ paragraph,title,tabs,imgNumber,action }: { tabs: string[],action:(name:string)=>void,imgNumber:number,paragraph:string,title:string }) {
    return (
        <div className='overflow-hidden  w-full flex flex-col 2xl:p-20 lg:p-[60px] py-[30px] px-5 2xl:gap-[50px] lg:gap-10 gap-[30px]  relative' >
            <img src={`/images/abstractDesign${imgNumber}.png`} className='z-0 absolute right-0 top-[50%] translate-y-[-50%]  2xl:size-[300px] lg:size-[250px] max-lg:hidden' />
            <div className='flex flex-col 2xl:gap-[30px] lg:gap-6 gap-5 '>
                <h1 className='z-10 text-shadow-black text-shadow-sm font-medium 2xl:text-5xl md:text-[38px] text-[28px]  text-white'>{title}</h1>
                <p className="text-[18px] leading-[150%] text-[#676665]">{paragraph}</p>
            </div>
            {
                tabs.length > 0 &&
                <FilterTabs tabs={tabs} action={action} />
            }
        </div>
    )
}

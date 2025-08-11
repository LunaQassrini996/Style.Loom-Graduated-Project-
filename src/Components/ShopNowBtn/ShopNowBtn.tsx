import { useNavigate } from "react-router-dom"


export default function ShopNowBtn({full,cart,path,text}:{path:string,text:string,cart:boolean,full:boolean}) {
    const navigate=useNavigate()
    return (
        <button onClick={()=>navigate(path)} className={`${full&& 'w-full flex justify-center'} cursor-pointer h-fit relative 2xl:rounded-[12px] rounded-[8px] border border-dashed border-[#404040] 2xl:py-[18px] 2xl:px-6 py-3.5 px-5 bg-[#1F1F1F] text-white `}>
            <div className="flex items-center gap-1">
                {cart&& <img src="/images/cart.svg" alt="" />}
                <p className="2xl:text-[18px] text-[14px] leading-[150%] text-white">{text}</p>
                {!cart && <img src="/images/linkArrow.svg" className="2xl:size-[16.5px] size-[13.75px]" alt="" />}
            </div>
            <div className="size-[16.5px] 2xl:rounded-tl-[12px] rounded-tl-[8px] absolute top-0 left-0 border-t border-l border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-tr-[12px] rounded-tr-[8px] absolute top-0 right-0 border-t border-r border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-bl-[12px] rounded-bl-[8px] absolute bottom-0 left-0 border-b border-l border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-br-[12px] rounded-br-[8px] absolute bottom-0 right-0 border-b border-r border-brown-60 "></div>
        </button>
    )
}

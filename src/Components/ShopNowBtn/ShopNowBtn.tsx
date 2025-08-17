import { useNavigate } from "react-router-dom"

export interface props{
    path:string;
    btnTitle:string;
    showIcon?:boolean;
    width?:string;
}
export default function ShopNowBtn({path,btnTitle,showIcon,width}:props) {
    const navigate=useNavigate()
    return (
        <button onClick={()=>navigate(path)} className={`cursor-pointer whitespace-nowrap relative ${width} rounded-[12px] border-2 border-dashed border-[#404040] 2xl:py-[18px] 2xl:px-6 py-3.5 px-5 bg-[#1F1F1F] text-white`}>
            <div className="flex justify-center items-center gap-1">
                <p className="2xl:text-lg text-sm leading-[150%] text-white">{btnTitle}</p>
               {showIcon&&<img src="/images/linkArrow.svg" className="2xl:size-[16.5px] size-[13.75px]" alt="" />}
            </div>
            <div className="size-[16.5px] rounded-tl-[12px] absolute top-0 left-0 border-t border-l border-brown-60 "></div>
            <div className="size-[16.5px] rounded-tr-[12px] absolute top-0 right-0 border-t border-r border-brown-60 "></div>
            <div className="size-[16.5px] rounded-bl-[12px] absolute bottom-0 left-0 border-b border-l border-brown-60 "></div>
            <div className="size-[16.5px] rounded-br-[12px] absolute bottom-0 right-0 border-b border-r border-brown-60 "></div>
        </button>
    )
}

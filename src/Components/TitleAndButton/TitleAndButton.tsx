import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
interface props{
    LqTitle:string;
    buttonName:string;
}
export default function TitleAndButton({LqTitle,buttonName}:props) {
  return (
    <div className="w-full flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between items-center gap-5 2xl:p-[50px] lg:p-[50px] md:p-10 p-[30px]">
        <h2 className="2xl:text-3xl lg:text-2xl md:text-xl text-xl font-roboto font-medium text-white">{LqTitle}</h2>
        <ShopNowBtn path="#" btnTitle={buttonName} showIcon={true} width="2xl:w-[274px] lg:w-[181px] md:w-[170px] w-full"/>
    </div>
  )
}

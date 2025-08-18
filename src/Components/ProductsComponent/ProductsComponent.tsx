import React, {  useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import TopBanner from "../TopBanner/TopBanner";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProducts } from "../../redux/slices/ProductSlice";
import type { RootState } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";



const ProductsComponent: React.FC = () => {
    const navigate=useNavigate()
    const currentCards=useSelector((state:RootState)=>state.products.currentProducts)
    const dispatch=useDispatch()
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startY = useRef(0);
    const scrollTop = useRef(0);

    
    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startY.current = e.clientY;
        scrollTop.current = scrollRef.current ? scrollRef.current.scrollTop : 0;
        document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        const dy = e.clientY - startY.current;
        scrollRef.current.scrollTop = scrollTop.current - dy;
    };

    const onMouseUp = () => {
        isDragging.current = false;
        document.body.style.userSelect = "";
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
        
    }, []);

    const cards = Array.from(currentCards).map((item,index)=>
        <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
    )

    return (
        <div className="lg:w-full justify-self-center md:w-[720px] max-md:w-[full] ">
            <div className=" w-full  2xl:rounded-t-[20px] lg:rounded-t-2xl rounded-t-[14px] xl:border-2 xl:border-b-0 lg:border-[1.5px] lg:border-b-0  border border-b-0 border-dashed border-dark-15 ">
                <TopBanner imgNumber={3} title="Elevate Your Style with Our Latest Collection" paragraph="Each piece is crafted to enhance your fashion statement." tabs={["All","Mens","Womens","Kids"]} action={(tab:string)=>dispatch(setCurrentProducts(tab))} />
            </div>
            <div className="md:w-[1596px] 2xl:rounded-b-[20px] lg:rounded-b-2xl rounded-b-[14px] max-w-full mx-auto  xl:border-2 xl:border-r-0 lg:border-[1.5px] lg:border-r-0  border border-r-0 border-dashed border-dark-15">
                <div
                    className="2xl:h-[1278px]   lg:h-[982px] h-[1422px] group relative  bg-dark-06 shadow-md overflow-y-auto overflow-x-hidden cursor-grab transition-shadow custom-scrollbar "
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    <div className="grid  xl:divide-y-2 lg:divide-y-[1.5px]   divide-y-[1px] divide-dashed divide-dark-15  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:auto-rows-[639px] lg:auto-rows-[491px] auto-rows-[474px]   ">
                        {cards.slice(0,12)}
                    </div>
                </div>
                <div onClick={()=>navigate('/products')} className="cursor-pointer md:hidden w-full py-[30px] px-5 gap-2.5 flex items-center justify-center rounded-b-[14px] border-t border-r border-dashed border-[#262626]">
                    <p className="text-[#B3B3B2] text-[16px] leading-[150%] font-mono ">View All</p>
                    <img src="/images/downarrow.svg" className="size-5" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;
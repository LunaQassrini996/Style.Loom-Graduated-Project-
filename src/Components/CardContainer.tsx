import { useSelector } from "react-redux";
import InfoCard from "../Components/InfoCard";
import type { RootState } from "../redux/store/store";

const CardContainer = () => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto border-2 border-dashed border-[#3a3a3a] rounded-3xl overflow-hidden">
        <div className="divide-y divide-dashed divide-[#2f2f2f]">
          <div className="p-10 md:p-14 text-left"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-dashed divide-[#2f2f2f]">
            {cards.map((item) => (
              <div key={item.id} className="p-6">
                <InfoCard
                  iconSrc={item.iconSrc}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  layout="vertical"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

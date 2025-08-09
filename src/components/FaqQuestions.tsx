import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import type { FAQ } from "../redux/types/FAQtypes";
import arrowDown from "/assets/Images/Home page photos/Icon.svg";

const FaqQuestions = () => {
  const faqs = useSelector((state: RootState) => state.faqs) as FAQ[];

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);
      if (!small) setShowAll(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqs = isSmallScreen && !showAll ? faqs.slice(0, 3) : faqs;

  return (
    <section className="bg-black text-white py-12 px-4 md:px-12">
      <div className="border-2 border-dashed border-gray-600 rounded-lg overflow-hidden">
        <div className="p-6 font-roboto hover:bg-[#1a1a1a] border-b-2 border-dashed border-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quaerat, soluta exercitationem suscipit earum
          perspiciatis commodi temporibus sed, esse iure, in iusto! Molestias
          fugit voluptatum sint blanditiis sunt ad. Itaque!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`p-[40px] hover:bg-[#1a1a1a] border-b-2 border-dashed border-gray-600 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              }`}
            >
              <h3 className="text-2xl font-medium mb-2 font-roboto">
                {faq.question}
              </h3>
              <p className="text-lg font-normal text-gray-300 leading-relaxed font-roboto">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {isSmallScreen && faqs.length > 3 && !showAll && (
          <div className="flex items-center justify-center p-6 hover:bg-[#1a1a1a] border-t-2 border-dashed border-gray-600">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 text-gray-600 font-medium font-mono hover:bg-gray-200 hover:text-black transition flex items-center justify-center gap-2 rounded"
            >
              View All
              <img
                src={arrowDown}
                alt="icon"
                className="w-4 h-4 text-gray-600"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqQuestions;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import type { FAQ } from "../../redux/types/FAQtypes";
import arrowDown from "/assets/Images/Home page photos/Icon.svg";

const FaqQuestions = () => {
  const faqs = useSelector((state: RootState) => state.faqs) as FAQ[];

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);

      if (!small) {
        setShowAll(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqs = isSmallScreen && !showAll ? faqs.slice(0, 3) : faqs;

  return (
    <>
      <section className="bg-black text-white py-12 px-4 md:px-12">
        <div className="border-2 border-dashed border-gray-600 p-6 mb-6 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quaerat, soluta exercitationem suscipit earum
          perspiciatis commodi temporibus sed, esse iure, in iusto! Molestias
          fugit voluptatum sint blanditiis sunt ad. Itaque!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-600">
          {visibleFaqs.map((faq, index) => {
            const isLastTwo = index >= visibleFaqs.length - 2;

            return (
              <div
                key={faq.id}
                className={`border-t-2  border-l-2 border-r-2 border-dashed border-gray-600 p-7 
                  ${index === 0 ? "rounded-t-lg" : ""}
                  ${isLastTwo ? "border-b-2 rounded-b-lg" : ""}
                `}
              >
                <h3 className="text-2xl font-medium mb-2">{faq.question}</h3>
                <p className="text-lg font-normal text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>

        {isSmallScreen && faqs.length > 3 && !showAll && (
          <div className="mt-6 text-center ml-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-none text-gray-300 rounded-md font-medium hover:bg-gray-200 hover:text-black transition flex items-center justify-center gap-2"
            >
              View All
              <img src={arrowDown} alt="icon" className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default FaqQuestions;

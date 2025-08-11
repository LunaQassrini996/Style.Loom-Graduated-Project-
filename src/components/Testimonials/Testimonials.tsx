import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import type { Testimonial } from "../../redux/types/Testimonialstypes";
import TwitterIcon from "../../../public/assets/Images/Home page photos/IconTwitter.svg";
import arrowIcon from "../../../public/assets/Images/Home page photos/Icon.svg";
import TopBanner from "../TopBanner/TopBanner";

const Testimonials = () => {
  const testimonials = useSelector(
    (state: RootState) => state.testimonials
  ) as Testimonial[];

  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTestimonials =
    showAll || !isSmallScreen ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="bg-dark-06 text-white  2xl:px-[162px] lg:px-[80px] md:px-10 px-4 pt-3">
      <div className="border-2 border-dashed border-dark-15">
        <TopBanner imgNumber={1} title="The StyleLoom Testimonial Collection." paragraph="At StyleLoom, our customers are the heartbeat of our brand."/>
      </div>
      <div className=" border border-dashed border-gray-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => {
            const columns =
              window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
            const isLastCol = (index + 1) % columns === 0;
            const isLastRow = index >= displayedTestimonials.length - columns;

            return (
              <div
                key={testimonial.id}
                className={`p-6 sm:p-8 lg:p-[60px] relative transition duration-300 hover:bg-[#1a1a1a]
                  ${!isLastCol ? "border-r border-dashed border-gray-600" : ""}
                  ${!isLastRow ? "border-b border-dashed border-gray-600" : ""}
                `}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full mr-3 object- text-[20px] font-roboto"
                  />
                  <div>
                    <p className="font-semibold text-[16px] sm:text-[16px] lg:text-[20px] font-roboto">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-[18px] sm:text-[14px] font-mono">
                      {testimonial.location}
                    </p>
                  </div>
                  <img
                    src={TwitterIcon}
                    alt="Twitter icon"
                    className="absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>

                <div className="mb-3">
                  <img
                    src={testimonial.rating}
                    alt="rating stars"
                    className="h-5"
                  />
                </div>

                <p className="text-gray-300 text-[18px] sm:text-[14px] lg:text-[18px] font-roboto">
                  {testimonial.content}
                </p>
              </div>
            );
          })}

          {!showAll && testimonials.length > 3 && isSmallScreen && (
            <div className="flex items-center justify-center p-6 border-t border-dashed border-gray-600 sm:col-span-2 lg:col-span-3">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2text-[16px] font-mono  hover:bg-gray-800 transition text-gray-600 flex items-center justify-center gap-2"
              >
                <span>View All</span>
                <img
                  src={arrowIcon}
                  alt="icon"
                  className="w-4 h-4  text-gray-600"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

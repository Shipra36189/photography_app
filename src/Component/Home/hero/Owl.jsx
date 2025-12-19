import React, { useRef, useEffect, useState  } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Owl = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

     const [swiperInstance, setSwiperInstance] = useState(null);

  // Wait until refs are set before enabling navigation
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
   
   <>

    <div className="owl-section bg-transparent mt-[-210px]">
      <div className="owl m-[50px] p-2 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={setSwiperInstance}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="owl-image max-w-[500px] mx-[50px]">
                <img
                  src={d.img}
                  alt={`carousel-${index}`}
                  className="h-[300px] w-[475px] rounded-[22px]"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div
            ref={prevRef}
            className="custom-swiper-button absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-amber-300 text-red-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FiChevronLeft size={18} />
          </div>
          <div
            ref={nextRef}
            className="custom-swiper-button absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-amber-300 text-red-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FiChevronRight size={18} />
          </div>
        </Swiper>
      </div>
    </div>

    </>
  )
}

const data = [
  {
    img: `/pictures/img-7.jpg`
  },
  {
    img: `/pictures/img-8.jpg`
  },
  {
    img: `/pictures/img-9.jpg`
  },
  {
    img: `/pictures/img-10.jpg`
  },
  {
    img: `/pictures/img-11.jpg`
  }
]

export default Owl

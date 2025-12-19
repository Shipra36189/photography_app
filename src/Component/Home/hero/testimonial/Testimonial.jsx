import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import review1 from '../../../../assets/images/wt35.jpeg'
import review2 from '../../../../assets/images/wt33.jpeg'
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

  

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-[10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 pt-10 pb-20">
        <div className="justify-items-center">
      <motion.h1 className="font-playfair text-[38px] leading-[56px] text-[#a97c58] mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp(0)}>
        What Customers are Saying
    </motion.h1>
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
          <div className="h-[1.5px] w-20 sm:w-22 bg-indigo-400"></div>
        </div>
        </div>
        <Slider {...settings}>
          {/* ---- Testimonial 1 ---- */}
          <motion.div className="p-2"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           variants={fadeInUp(0.2)}>
            <div className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.05)] rounded-md p-5 sm:p-6 relative">
              <FaQuoteLeft size={40} className="left-quo text-amber-300 absolute top-0 left-5 select-none" />
              <p className="text-gray-600 text-xl sm:text-sm leading-relaxed pl-10 pr-10 sm:pl-12 sm:pr-12">
                <span className="font-semibold text-xl text-gray-700">"Made my special day unforgettable"</span>
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-10 pr-10 sm:pl-12 sm:pr-12">
              I booked a family portrait session, and the results were stunning. The photographer was wonderful with our kids and somehow managed to capture everyone smiling naturally! Prices were a bit higher than some other places, but the quality and experience made it worth it.
              </p>
              <FaQuoteRight size={40} className= "right-quo text-amber-300 absolute top-26 right-5 select-none" />
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-amber-300 overflow-hidden">
                <img src={review1} alt="Portrait" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-black text-sm sm:text-base">Vinod Thapa</p>
                <p className="text-gray-500 text-xs sm:text-sm">Entrepreneur</p>
              </div>
            </div>
          </motion.div>

          {/* ---- Testimonial 2 ---- */}
          <motion.div className="p-2  "
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           variants={fadeInUp(0.2)}>
            <div className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.05)] rounded-md p-5 sm:p-6 relative">
              <FaQuoteLeft size={40} className="left-quo text-amber-300 absolute top-0 left-5 select-none" />
              <p className="text-gray-600 text-xl sm:text-sm leading-relaxed pl-10 pr-10 sm:pl-12 sm:pr-12">
                <span className="font-semibold text-xl text-gray-700">"Professional, creative, and reliable"</span>
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-10 pr-10 sm:pl-12 sm:pr-12">
              I used ps photography for a product shoot for my small business, and they nailed the aesthetic I was going for. The team was punctual, brought great ideas to the table, and delivered high-res images ahead of schedule.
              </p>
              <FaQuoteRight size={40} className="right-quo text-amber-300 absolute top-26 right-5 select-none" />
            </div>

            <div className="flex items-center space-x-8 mt-8">
              <div className="  w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-amber-300 overflow-hidden">
                <img src={review2} alt="Portrait" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-black text-sm sm:text-base">Sunny Sharma</p>
                <p className="text-gray-500 text-xs sm:text-sm">Entrepreneur</p>
              </div>
            </div>
          </motion.div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial

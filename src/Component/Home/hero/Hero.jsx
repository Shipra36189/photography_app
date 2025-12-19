import React, {useState} from 'react'
import './Hero.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { AnimatePresence, delay, easeInOut, motion, scale } from 'framer-motion';
import { Link } from 'react-router-dom';



const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    afterChange: (current) => setActiveSlide(current),
  };

  const slides = [
    {
      image: `/pictures/wt37.jpeg`,
      heading: 'Explore the world, one  colorful photo at a time',
      caption: 'Ps Photography',
      buttonText: 'Expore ps Photography',
    },
    // {
    //   image: `/pictures/w2.jpeg`,
    //   heading: 'Explore the world, one  colorful photo at a time',
    //   caption: 'Ps Photography',
    //   buttonText: 'Expore ps Photography',
    // },
    {
      image: `/pictures/wt38.jpeg`,
      heading: 'Explore the world, one  colorful photo at a time',
      caption: 'Ps Photography',
      buttonText: 'Expore ps Photography',
    },
  ];

  return (


  <>
<div className="hero relative overflow-hidden">
      <Slider {...settings} className="slick-background">
        {slides.map((slide, index) => (
          <div key={index} className="hero-section relative w-screen">
             {/* Overlay */}
  {/* <div
    className="absolute inset-0 z-30"
    style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)' }}
  ></div> */}
            <img
              src={slide.image}
              alt={`Photo by Ps Photography: ${slide.caption}`}
              className="w-screen h-[140vh] object-cover" loading="lazy"
            />
            {index === activeSlide && (
            <div className="absolute inset-0 flex justify-center items-center transform -translate-y-10">
              <motion.div className="brace-border text-white text-center px-6 relative items-center"
              key={index}
              initial="hidden"
              animate="show"
              exit= "exit"
              variants={fadeUp(0.1)}>

                <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
                // key={index}
                variants={fadeUp(0.3)}>
                  {slide.heading}
                </motion.h1>

                <motion.p className="text-lg md:text-2xl mb-6"
                // key={index}
                variants={fadeUp(0.5)}>
                  {slide.caption}
                </motion.p>

                <Link to="/about">
                <motion.button className=""
                // key={index}
                variants={fadeUp(0.6)}>
                  {slide.buttonText}
                </motion.button>
                </Link>
                
              </motion.div>
            </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}


export default Hero

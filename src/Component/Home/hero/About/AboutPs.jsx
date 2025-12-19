import React from 'react'
import './AboutPs.css'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About2 from '../../../../assets/images/w11.jpeg'
import About1 from '../../../../assets/images/wt19.jpeg'
import About3 from '../../../../assets/images/wt35.jpeg'



const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const AboutPs = () => {
  return (
    <div>
      <main className="max-w-[1440px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
   <div className="relative flex-shrink-0">
    <img alt="Portrait of" className="w-[400px] h-[500px] object-cover" height="500" 
    src={About1}
     width="400"/>
    <div className="absolute -bottom-10 -right-10  md-sm-0 border-8 border-white w-[200px] h-[200px]">
     <img alt="Two women" className="w-full h-full object-cover animate-upDown shadow-glow" height="200" 
     src={About3}
      width="200"/>
    </div>
   </div>
   <section className="max-w-xl text-center lg:text-left justify-items-center">
    <motion.h1 className="font-playfair text-[48px] leading-[56px] text-[#a97c58] mb-6  items-center text-center"
    variants={fadeInUp(0.2)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}>
     About Us
    </motion.h1>
    <motion.p className="text-[#3c3c3c] text-[14px] leading-7 mb-6"
    variants={fadeInUp(0.4)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}>
      Our Photography Studio is a creative space where passion meets professionalism. With a team of experienced photographers and state-of-the-art equipment, we specialize in capturing life’s most meaningful moments — from weddings and portraits to editorial and commercial shoots. Every photo we take is crafted with care, creativity, and an eye for detail, ensuring timeless images that tell your unique story. At our studio, we don’t just take pictures — we preserve emotions and memories.
     
    </motion.p>
    <motion.p className="text-[#3c3c3c] text-[14px] leading-7 mb-10"
    variants={fadeInUp(0.6)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}>
     We provide you total privacy that you don't need to worry about the crowd starring and feel shy or uncomfortable. Its couple friendly location, equipped with makeup room, changing room, clean washrooms & warm hospitality.
    </motion.p>

    <Link to="/about">
    <motion.button aria-label="Read more" className="square-bracket items-center font-semibold text-sm sm:text-base md:text-lg tracking-wide"
    variants={fadeInUp(0.8)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}>
     <Link to="/about" className=''>
      <span className='flex items-center px-2 py-1 gap-3 mx-auto lg:mx-0 '>
      READ MORE <FaArrowRight />
      </span>
      </Link>
    </motion.button>
    </Link>

   </section>
   <div className=" relative flex-shrink-0">
    {/* <p className="sign font-greatvibes text-[24px] leading-[28px] text-[#3c3c3c] absolute -top-20 -left-30 rotate-[-30deg] origin-top-right">
     Ps Photography
    </p> */}
    <img alt="Portrait" className="w-[400px] h-[500px] object-cover " height="500" 
    src={About2}
    width="400"/>
   </div>
  </main>
    </div>
  )
}

export default AboutPs

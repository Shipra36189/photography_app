import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AboutBgImage from '../../../assets/images/banner-bg.png'
import PhotographerImage from '../../../assets/images/img-1.jpg'
import AboutSessionImage from '../../../assets/images/img-6.jpg'
import { FaArrowRight } from "react-icons/fa";
import './AboutBg.css'
import { Link } from "react-router-dom";


const images = [
  `/pictures/img-7.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-9.jpg`
];

const testimonials = [
  {
    quote:
      "Her vision is unmatched, and her understanding of luxury design is comprehensive.",
    author: "– Kate and Brad, 2023 Couple — Italy",
  },
  {
    quote:
      "Every detail was flawless. We couldn’t have imagined a more perfect experience.",
    author: "– Lila and Omar, 2023 Couple — Morocco",
  },
  {
    quote:
      "The artistry and elegance in every frame — simply breathtaking.",
    author: "– Mia, Editorial Director",
  },
];

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

// Text animation variants
const contVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants for animations
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeftVariant = {
  hidden: { x: '-80px', opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const slideInRightVariant = {
  hidden: { x: "100px", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const AboutBg = () => {

  const [index, setIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
<div className="text-gray-800 bg-[#f5f0ea]">
{/* Hero Section */}
<div
  className="relative h-[90vh] w-full bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${AboutBgImage})` }}
>
  <div className="absolute inset-0 bg-black opacity-5"></div>
  <div className="relative z-10 flex items-center justify-center h-full px-4 text-center ">
  <div>
          {/* Line 1 - slide in from left */}
          <motion.h1
            className="text-white text-6xl md:text-5xl font-serif font-[Playfair Display] uppercase"
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2 }}
          >
            Capturing Life,
          </motion.h1>

          {/* Line 2 - slide in from right */}
          <motion.h1
            className="text-white text-6xl md:text-5xl font-serif font-[Playfair Display] uppercase"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2, delay: 0.2 }}
          >
            One Frame at a Time
          </motion.h1>
        </div>
  </div>
</div>

{/* About Section */}
<div className="bg-[#f5f0ea]">

    {/* <section id="about-section" className="py-16 px-6 md:px-20">
  <motion.div className="flex flex-col md:flex-row items-center mx-auto text-lg leading-relaxed text-center max-w-8xl"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
    
    <motion.div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0 relative"
    variants={slideInLeftVariant}>
      <img
        src={PhotographerImage}
        alt="Photographer"
        className="w-full max-w-[800px] h-[400px] md:w-[425px] md:h-[550px]  -mt-[250px] rounded-lg shadow-lg object-cover border-12 border-white mx-auto"
        
      />
    </motion.div>
    
    <motion.div className="text-lg leading-relaxed md:w-1/2 text-center md:text-left"
    variants={containerVariants}>
      <motion.h2 className="text-3xl font-semibold mb-4"
      variants={fadeUpVariant}
      >About Me</motion.h2>
      <motion.p variants={fadeUpVariant}>
        I'm <span className="font-semibold">Prakash Sharma</span>, a passionate photographer with over 8 years of experience capturing timeless moments.
        From candid portraits to dramatic landscapes, I believe every frame tells a story. My mission is to transform fleeting moments into lasting memories.
      </motion.p>
      <motion.p className="mt-4" variants={fadeUpVariant}>
        Based in India, I specialize in wedding photography, personal portraits, and editorial shoots. Every click is crafted with emotion, light, and precision.
      </motion.p>
    </motion.div>
  </motion.div>
    </section> */}

<section id="about-section" className="py-16 px-6 sm:px-8 md:px-20">
  <motion.div
    className="flex flex-col md:flex-row items-center mx-auto text-lg leading-relaxed text-center max-w-8xl"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* Image */}
    <motion.div 
      className="flex-shrink-0 w-full mb-8 md:mb-0 relative md:w-1/2"
      variants={slideInLeftVariant}
    >
      <img
        src={PhotographerImage}
        alt="Photographer"
        className="w-full max-w-[800px] h-[400px] sm:h-[350px] md:w-[425px] md:h-[550px] -mt-[250px] rounded-lg shadow-lg object-cover border-12 border-white mx-auto"
      />
    </motion.div>

    {/* Text Content */}
    <motion.div
      className="text-lg leading-relaxed md:w-1/2 text-center md:text-left"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl font-semibold mb-4"
        variants={fadeUpVariant}
      >
        About Me
      </motion.h2>
      
      <motion.p 
        variants={fadeUpVariant}
      >
        I'm <span className="font-semibold">Pushkar Sharma</span>, a passionate photographer , capturing timeless moments.
        From candid portraits to dramatic landscapes, I believe every frame tells a story. My mission is to transform fleeting moments into lasting memories.
      </motion.p>

      <motion.p 
        className="mt-4" 
        variants={fadeUpVariant}
      >
        Based in India, I specialize in wedding photography, personal portraits, and editorial shoots. Every click is crafted with emotion, light, and precision.
      </motion.p>
    </motion.div>
  </motion.div>
</section>


  <main className="min-h-screen flex items-center justify-center px-6 ">
    <div
      className="relative max-w-5xl w-full flex flex-col md:flex-row bg-white md:pl-28 md:pr-0 py-18 px-8 md:items-start items-center shadow-none md:shadow-none h-[70vh] pt-5 pl-0"
    >
      <motion.div className="md:max-w-3xl max-w-full md:pr-20 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
        <motion.h1
          className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-3 max-w-none"
          variants={fadeUpVariant}
        >
          I've Always Had A Huge
          Passion For Photographer
        </motion.h1>
        <motion.p
          className="text-[12px] md:text-base text-[#b28a75] leading-relaxed font-montserrat"
          variants={fadeUpVariant}
        >
          At our photography studio, every shot is a collaboration — between light, emotion, and vision. We don’t just take pictures; we craft experiences that celebrate personality, style, and story. Whether you're stepping in for a portrait session, a brand shoot, or a creative concept, our space is designed to bring your ideas to life. With state-of-the-art equipment, a welcoming environment, and a team that truly cares, we turn moments into art that lasts a lifetime.
        </motion.p>
      </motion.div>
      
      <motion.div
        className="about-img2div relative md:right-[-70px] md:bottom-[-30px] mt-12 md:mt-0 md:ml-12 flex-shrink-0 shadow-[0_0_40px_20px_rgba(0,0,0,0.25)] h-[470px] w-[380px]"
        variants={slideInRightVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        
      >
        <img
          alt="Portrait of a woman"
          className="about-img-2 w-full h-full object-cover about-img2"
          src="https://storage.googleapis.com/a1aa/image/ceae3225-7891-424a-547e-162e14ff082d.jpg"
        />
      </motion.div>
    </div>
  </main>
</div>

<div className="bg-[#c69679]">
<main className="min-h-screen flex items-center justify-center px-6 py-12">
   <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

   <motion.div className="bg-slider w-full md:w-1/2 relative shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
   initial={{ x: -200, opacity: 0 }}
   whileInView={{ x: 0, opacity: 1 }}
   transition={{ duration: 1, ease: "easeOut" }}
   viewport={{ once: true }}>
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className=" rounded-md w-full h-[450px] object-cover transition-all duration-700 ease-in-out shadow-xl"
            />
          </motion.div>

    <motion.div className="max-w-xl text-white"
    variants={contVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}>
     <motion.h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8" variants={paragraphVariants}>
      Because every picture tells a story. Let me help you tell yours!
     </motion.h1>
     <motion.p className="mb-8 text-sm md:text-base leading-relaxed max-w-xl" variants={paragraphVariants}>
      A photo can reveal more about a person than you might have thought. Just like looking in the eyes, photography can reveal your soul. What's more, a picture can bear different meanings.
     </motion.p>
     <motion.p className="text-sm md:text-base leading-relaxed max-w-xl"
     variants={paragraphVariants}>
      I specialize in lifestyle and travel lifestyle photography. I not only shoot in and around the streets of the city, but also in apartments, shops, parks – anywhere and everywhere my clients FEEL happy. Finding places that make people feel happy, as well as creating memories while we shoot. And that is what makes for great photos!
     </motion.p>
    </motion.div>
   </div>
  </main>
</div>

<div className="relative w-full h-[70vh] bg-fixed overflow-hidden 'Playfair Display' bg-cover bg-center" style={{ backgroundImage: `url(${AboutSessionImage})` }} >
   <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-background: rgba(0,0,0,0.15);">
    <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-normal max-w-4xl" 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}>
     Book Your Session
     <em>
      Today
     </em>
    </motion.h1>
    <motion.button aria-label="Send an inquiry" className="mt-8 bg-white text-gray-900 text-xs sm:text-sm font-light tracking-widest py-4 px-12 rounded-full flex items-center space-x-3 hover:bg-gray-100 transition"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
    viewport={{ once: true }}>
     <span>
      SEND AN INQUIRY
     </span>
     <FaArrowRight />
    </motion.button>
   </div>
  </div>

  <div className="relative max-w-4xl mx-auto bg-white px-6 py-16 sm:px-12 md:px-16 lg:px-24 mt-[-150px] mb-[100px] shadow-lg text-center">
      <p className="text-xs tracking-widest text-gray-900 mb-6 font-sans uppercase">
        Testimonial
      </p>

      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-gray-900 font-serif text-[2rem] sm:text-4xl leading-tight"
        >
          “{testimonials[index].quote}”
          <footer className="mt-6 text-gray-700 italic text-sm sm:text-base">
            {testimonials[index].author}
          </footer>
        </motion.blockquote>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-10 space-x-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>

    <div className="relative flex flex-col  md:flex-row h-[80vh] w-full overflow-hidden ">

      {/* Left Side: Text Content */}
      <motion.div
        className="md:w-3/4 w-full flex flex-col justify-center items-start p-16 bg-transparent text-gray-800 z-99 relative"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="show-txt">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Capture Every Moment
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-md">
          Photography is not just about capturing light — it's about preserving emotions,
          stories, and memories that last a lifetime. Let us help you document your most
          meaningful moments with elegance and artistry.
        </p></div>
      </motion.div>

      {/* Right Side: Full Height Image */}
      <motion.div
        className="md:w-2/4 w-full h-[300px] md:h-full z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/ae779fc9-21ea-4a24-6394-9602094c30b8.jpg"
          alt="Photography"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center Image */}
      <motion.div
        className=" md:block absolute left-[57%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/f1addf27-423d-47cd-0438-458cc30e8ac2.jpg"
          alt="Center Feature"
          className="w-[300px] h-[400px] object-cover rounded-md shadow-2xl"
        />
      </motion.div>
    </div>

    

{/* Call to Action */}
<section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
  <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
  <p className="text-lg mb-6">Let’s create something beautiful. Whether it's your wedding, a portrait session, or a personal project – I'm here for it.</p>
  <Link
    to="/contact"
    className="inline-block bg-amber-400 text-black font-semibold px-6 py-3 rounded hover:bg-amber-500 transition"
  >
    Contact Me
  </Link>
</section>

</div>
</>
  )
}

export default AboutBg

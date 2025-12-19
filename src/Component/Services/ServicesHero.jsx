import AboutBgImage from '../../assets/images/bgflower3.jpg'
import PhotographerImage from '../../assets/images/img-1.jpg'
import SecondaryImage from '../../assets/images/img-2.jpg'
import BgFlower from '../../assets/images/bgflower2.jpg'
import FlowerSessionImage from '../../assets/images/bgflower.jpg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import './ServicesHero.css'



const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};



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
  hidden: { x: '80px', opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const fadeInBottomLeft = {
  hidden: { opacity: 0, x: -30, y: 30 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


const ServicesHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
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
            initial={{ x: -600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2 }}
          >
            chase moments,
          </motion.h1>

          {/* Line 2 - slide in from right */}
          <motion.h1
            className="text-white text-6xl md:text-5xl font-serif font-[Playfair Display] uppercase"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2, delay: 0.2 }}
          >
            frame colors
          </motion.h1>
        </div>
  </div>
</div>

<section id="about-section" className="py-16 px-6 md:px-20">
  <motion.div className="flex flex-col md:flex-row items-center mx-auto text-lg leading-relaxed text-center max-w-8xl"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}>
    
    {/* Text Content */}
    <motion.div className="text-lg leading-relaxed md:w-1/2 text-center md:text-left mb-8 md:mb-0"
    variants={containerVariants}>
      <motion.h2 className="text-3xl font-semibold mb-4"
      variants={fadeUpVariant}
      >Capturing moments from today... creating memories for a lifetime.</motion.h2>
      <motion.p variants={fadeUpVariant}>
        I'm <span className="font-semibold">Prakash Sharma</span>, a passionate photographer with over 8 years of experience capturing timeless moments.
        From candid portraits to dramatic landscapes, I believe every frame tells a story. My mission is to transform fleeting moments into lasting memories.
      </motion.p>
      <motion.p className="mt-4" variants={fadeUpVariant}>
        Based in India, I specialize in wedding photography, personal portraits, and editorial shoots. Every click is crafted with emotion, light, and precision.
      </motion.p>
    </motion.div>

    {/* Image */}
    <motion.div
  className="flex-shrink-0 w-full md:w-1/2 relative"
  variants={slideInLeftVariant}
>
  {/* Main image */}
  <img
    src={PhotographerImage}
    alt="Portrait of photographer Prakash Sharma"
    className="service-img-1 w-full max-w-[800px] h-[400px] md:w-[425px] md:h-[550px] md:-mt-[250px] rounded-lg shadow-lg object-cover border-12 border-[#fff] mx-auto"
  />

<motion.div
    className="service-img-2 absolute bottom-4 left-4 w-60 h-50 pt-[20px]"
    variants={fadeInBottomLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* Shadow box */}
    <div className="absolute top-2.5 -right-2 w-58 h-70 bg-[#a86b4d]  z-0"></div>
    
    {/* Actual image */} 
    <img
      src={SecondaryImage}
      alt="Decorative corner image"
      className="relative w-full h-[290px]  object-cover z-10 shadow-md"
    />
  </motion.div>
</motion.div>
    
  </motion.div>
    </section>

    <section
      ref={ref}
      className="relative h-[30vh] bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${AboutBgImage})` }}
    >
      {/* Brown Overlay */}
      <div className="absolute inset-0 bg-[rgba(101,67,33,0.6)]"></div>

      {/* Content */}
      <motion.div
        className="relative items-end z-10 flex flex-col py-10 h-full text-white px-10 md:px-16 lg:px-24"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 pr-60"
          variants={item}
        >
          <div className="styleHeadline">Welcome to Our Site</div>
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl"
          variants={item}
        >
          We provide high-quality services with a touch of elegance and care.
          Let’s build something great together.
        </motion.p>
      </motion.div>
    </section>

<div className=" h-[80vh] flex image-frame justify-center  bg-center bg-cover flex-col md:flex-row items-center  w-full relative" style={{ backgroundImage: `url(${BgFlower})` }}> 

      <div className="absolute inset-0 bg-white opacity-60"></div>

{/* left side */}
<div className="image-frame-1 relative flex flex-col pl-[300px] items-center justify-center md:justify-end  md:w-1/2 -mt-[210px] pb-[100px]">
      <div className="flex flex-col p-3 bg-white rounded shadow-md w-50 transform rotate-4 sm:max-w-[300px] md:rotate-3">
        <img
          src={AboutBgImage}
          alt="Photo 1"
          className="mb-2 rounded h-[170px]"
        />
        <img
          src={SecondaryImage}
          alt="Photo 2"
          className="mb-2 rounded h-[170px]"
        />
        <img
          src={PhotographerImage}
          alt="Photo 3"
          className="rounded h-[170px]"
        />
      </div>
</div>

  {/* right side */}
<div className="relative py-5 txt-btn md:mt-[-210px] w-full md:w-1/2 flex flex-col items-center md:items-center space-y-6">
<button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]">
          Proffesionalism
        </button>
<button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]">
          Proffesionalism
        </button>
<button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]">
          Proffesionalism
        </button>
<button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]">
          Proffesionalism
        </button>
</div>

</div>


    <div className="h-[145vh] bg-[#fff6f0]">

    <div className="relative max-w-3xl mx-auto bg-white px-6 py-10 sm:px-12 md:px-16 lg:px-24 mt-[-120px] mb-[50px] shadow-lg text-center text-[#a15e3a]">
    <h1 className="text-[28px] md:text-[32px] tracking-widest leading-tight font-light mb-2">FULL SERVICE PLANNING</h1>
    <p className="text-[12px] md:text-[14px] tracking-widest font-light max-w-xl mx-auto leading-relaxed mb-12">
      CRAFTED FOR COUPLES INTERESTED IN WORKING ALONGSIDE AN EXPERIENCED TEAM OF TOP WEDDING PLANNERS TO RESEARCH, PLAN, AND DESIGN EVERY THOUGHTFUL DETAIL OF THEIR WEDDING
    </p>
    <div className="absolute left-1/2 -translate-x-1/2 w-px h-26 bg-[#a15e3a] mx-auto mt-0"></div>
    </div>

<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 px-4 py-12"> 

  {/* left-side */}
<div className="w-full md:w-1/2 mt-10 md:mt-0 mx-auto md:mx-0 flex justify-center pl-[100px]">
<div className="relative max-w-[600px] w-full">
   <img alt="Woma" className="absolute -top-9 -left-25 w-[270px] h-[450px] object-cover opacity-20 z-0" src="https://storage.googleapis.com/a1aa/image/1db14587-db81-4de6-4248-0b4dff623548.jpg" />
   <div className="relative z-10">

    <img alt="Larg" className="rounded-t-[50%] w-[280px] object-cover h-[370px]" src="https://storage.googleapis.com/a1aa/image/87669e5b-b4d9-4a11-cd49-abe26d057ac5.jpg" />

    <img alt="Close-up" className="border border-white rounded-md mt-[-130px] -ml-10 shadow-lg h-[230px] w-[200px]" src="https://storage.googleapis.com/a1aa/image/1b9e44f8-844c-4584-7ec1-e500a3438c63.jpg" />
   </div>
  </div>
</div>

  {/* Rright-side */}
<div className="w-full md:w-1/2">
    <h1 className="text-[#a75a3c] text-3xl sm:text-4xl md:text-5xl leading-[1.2] mb-8 font-light">
      WE’LL GUIDE YOU THROUGH <br />
      EVERY STEP IN THE WEDDING <br />
      PLANNING PROCESS
    </h1>

    <div className="space-y-6 text-[#a75a3c]">
      <div>
        <h2 className="uppercase text-sm tracking-widest font-semibold mb-1 text-[#d99a7a]">
          COMMUNICATION + SUPPORT
        </h2>
        <p className="text-[#3a2c23] font-normal text-base leading-relaxed">
          As soon as you book, you’ll get access to our planning portal and have ample phone/email communication throughout your planning journey.
        </p>
      </div>

      <div>
        <h2 className="uppercase text-sm tracking-widest font-semibold mb-1 text-[#d99a7a]">
          IN-PERSON CONSULTATIONS
        </h2>
        <p className="text-[#3a2c23] font-normal text-base leading-relaxed">
          We want to see your pretty faces each month and go over your incredible wedding details in person! You’ll also get monthly to-do lists.
        </p>
      </div>

    </div>
  
</div>

</div>
    </div>

    <div className="relative w-full h-[50vh] bg-fixed overflow-hidden 'Playfair Display' bg-cover bg-center" style={{ backgroundImage: `url(${FlowerSessionImage})` }} >

    <div className="absolute inset-0 bg-[#fff6f0] opacity-40 "></div>

       <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
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

        <Link to="/contact">
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
        </Link>
       </div>
      </div>

<div className="relative h-[40vh]" >
    <section className="relative  mx-auto px-6 md:py-24 lg:py-1 flex flex-col md:flex-row items-center md:items-start bg-center bg-cover" style={{ backgroundImage: `url(${BgFlower})` }} >

<div className="absolute inset-0 bg-white opacity-60"></div>

   {/* <!-- Left content with text and button --> */}
   <div className="relative z-10 md:w-1/2 px-8 md:p-12 lg:p-16">
    <h2 className="font-serif text-[26px] md:text-[32px] leading-[1.3] text-[#9c5a2a] mb-4 md:mb-6">
     AN ELEVATED WEDDING
     <br/>
     PLANNING EXPERIENCE FOR
     <br/>
     THE BOLD &amp; MODERN
    </h2>
    <p className="text-[14px] md:text-[15px] text-black mb-8 max-w-md leading-relaxed">
     Effortlessly Chic, Creative, Personalized, Iconic Kansas City, a Dash of Fun, and a Lot of Love. We're here to help you celebrate your Kansas City wedding in the best way!
    </p>
    <button className="bg-[#a67c0e] text-white uppercase text-[13px] md:text-[14px] font-semibold tracking-widest py-3 px-6 md:px-8 hover:bg-[#8a6509] transition-colors" type="button">
     LET'S CREATE SOMETHING UNIQUE
    </button>
   </div>
   {/* <!-- Right images stack --> */}
   <div className="relative image-frame2 flex flex-col pl-[300px] items-center justify-center -mt-[70px]">
      <div className="flex flex-col p-3 bg-white rounded shadow-md w-50 transform rotate-4">
        <img
          src={AboutBgImage}
          alt="Photo 1"
          className="mb-2 rounded h-[170px]"
        />
        <img
          src={SecondaryImage}
          alt="Photo 2"
          className="mb-2 rounded h-[170px]"
        />
        <img
          src={PhotographerImage}
          alt="Photo 3"
          className="rounded h-[170px]"
        />
      </div>
</div>
   
  </section>
</div>

    </div>
  )
}

export default ServicesHero

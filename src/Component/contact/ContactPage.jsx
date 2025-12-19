import React, { useState } from 'react';
import ContactBgPhoto from '../../assets/images/wt3.jpeg'
import ContactBg from '../../assets/images/wt13.jpeg'
import ContactBg1 from '../../assets/images/wt3.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import overlayImage from '../../assets/images/img-2.jpg'
import { FaRegClock } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import './ContactPage.css'
import { Link } from 'react-router-dom';




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

const ContactPage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace this with your API/email logic
    alert('Message submitted!');
    setForm({ name: '', email: '', message: '' });
  };
  

  return (
    <div>
      <div
  className="relative h-[90vh] w-full bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${ContactBgPhoto})` }}
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
            Capturing your most
          </motion.h1>

          {/* Line 2 - slide in from right */}
          <motion.h1
            className="text-white text-6xl md:text-5xl font-serif font-[Playfair Display] uppercase"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2, delay: 0.2 }}
          >
            precious moments
          </motion.h1>
        </div>
  </div>
      </div>

<div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-[100px] bg-[#d0c6a9]">
  <div className="relative -mt-[100px] mb-16">
    <div className="relative">
     <div aria-hidden="true" className="absolute -top-10  w-[200px] h-[320px] border border-white rounded-[45%]"></div>
     <img alt="Bride" className="relative rounded-[45%] object-cover w-[200px] h-[300px]" src="https://storage.googleapis.com/a1aa/image/c67c6980-9777-452d-358b-2f70b1fa4838.jpg" />
    </div>
   </div>

   <motion.div
      ref={ref}
      className="-mt-[60px] contact-section"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <motion.p
        className="text-[12px] text-[#b38600] tracking-widest mb-2"
        variants={item}
      >
        HELLO LOVELY
      </motion.p>

      <motion.h2
        className="text-[#8c3e1a] text-[22px] md:text-[28px] leading-tight font-normal max-w-[400px] mx-auto"
        variants={item}
      >
        PLEASE FILL OUT THE CONTACT FORM BELOW AND WE WILL BE IN TOUCH SHORTLY!
      </motion.h2>

      <motion.p
        className="text-[12px] text-black mt-2 max-w-[440px] mx-auto flex"
        variants={item}
      >
        Vendors, feel free to email us directly at
        <Link className="underline pl-2" to="mailto:pushkarsharma5271@gmail.com">
          pushkarsharma5271@gmail.com
        </Link>
      </motion.p>

      <motion.button
        className="mt-4 bg-[#b38600] text-white text-[14px] tracking-widest px-8 py-3 uppercase"
        type="button"
        variants={item}
      >
        EMAIL US!
      </motion.button>
    </motion.div>
</div>



<div className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: `url(${ContactBg1})` }}>
      {/* <div className="absolute inset-0 bg-white opacity-30"></div> */}


<div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 pointer-events-none z-0">
  <img
    src={overlayImage}
    alt="Decorative Overlay"
    className="w-[400px] h-[500px] object-cover border-white border-6"
  />
</div>

<motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative max-w-md p-10 mx-4 shadow-lg z-10 items-center justify-center bg-white"
    >
      <p className="text-[10px] leading-5 text-[#8B4A0E] tracking-widest uppercase mb-6">
        I DON’T EVEN KNOW WHERE TO START.
        <br />
        YOU EVER MEET SOMEONE AND
        <br />
        IMMEDIATELY THEY MAKE YOU FEEL
        <br />
        LIKE THEY’VE KNOWN YOU FOR YEARS?
      </p>
      <p className="text-[11px] leading-[14px] text-black mb-10">
        That’s Rachael and her team. Going into wedding planning, I knew I needed help...
      </p>
      <div className="flex justify-between items-center">
        <span className="font-signature text-[#8B4A0E] text-[28px] leading-none">
          Alexandra
        </span>
      </div>
    </motion.div>
  </div>

  

    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-center bg-cover" style={{ backgroundImage: `url(${ContactBg})` }}>
   <div className="max-w-7xl w-full flex flex-col items-center ">
    <h1 className="text-white text-3xl font-semibold mb-2 text-center" >
     Contact Us
    </h1>
    <p className="text-white text-center max-w-3xl mb-12 text-sm sm:text-base" >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
    </p>
    <div className="w-full max-w-5xl flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-[150px]">
     <div className="flex flex-col gap-10 md:w-1/2">
      <div className="flex items-center gap-6">
       <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
        <FaLocationDot size={25} />
       </div>
       <div className="text-white text-base leading-relaxed">
        <p>
         <span className="text-cyan-400 font-semibold text-lg">
          Address
         </span>
        </p>
        <p>
         Supernova nova east sector - 94,
        </p>
        <p>
        Noida, Uttar Pradesh
        </p>
        <p>
         55060
        </p>
       </div>
      </div>
      <div className="flex items-center gap-6">
       <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
        <FaPhoneAlt size={25}/>
       </div>
       <div className="text-white text-base leading-relaxed">
        <p>
         <span className="text-cyan-400 font-semibold text-lg">
          Phone
         </span>
        </p>
            <div className="flex flex-col">
              <a href="tel:+918434512054" className="text-lg hover:text-cyan-400 transition-colors">
                +91 8434512054
              </a>
              <a href="tel:+918384037642" className="text-lg hover:text-cyan-400 transition-colors">
                +91 8384037642
              </a>
          </div>
       </div>
      </div>
      <div className="flex items-center gap-6">
       <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
        <IoMail size={25} />
       </div>
       <div className="text-white text-base leading-relaxed break-all max-w-xs">
        <p>
         <span className="text-cyan-400 font-semibold text-lg">
          Email
         </span>
        </p>
        <Link to="pushkarsharma5271@gmail.com">
         pushkarsharma5271@gmail.com
        </Link>
       </div>
      </div>
     </div>
     <form aria-label="Send Message Form" className="bg-white p-10 w-full md:w-1/2 max-w-md flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-gray-900">
       Send Message
      </h2>
      <input className="border-b border-gray-700 focus:outline-none focus:border-cyan-400 pb-1" placeholder="Full Name" required="" type="text"/>
      <input className="border-b border-gray-700 focus:outline-none focus:border-cyan-400 pb-1" placeholder="Email" required="" type="email"/>
      <textarea className="border-b border-gray-700 focus:outline-none focus:border-cyan-400 pb-1 resize-none" placeholder="Type your Message..." required="" rows="3"></textarea>
      <button className="bg-cyan-400 text-white px-6 py-2 w-max font-medium hover:bg-cyan-500 transition-colors" type="submit">
       Send
      </button>
     </form>
    </div>
   </div>
  </div>

<section className="w-full bg-gradient-to-br from-indigo-100 to-white py-12 px-6 md:px-12 ">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12 border -mt-[150px] border-indigo-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <FaRegClock  className="w-10 h-10 text-indigo-500" />
          <h2 className="text-3xl font-bold text-gray-800">Opening Hours</h2>
        </div>
        <p className="text-gray-600 mb-6">
          We’re here to help you during the following hours. Stop by or give us a call!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>Monday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Tuesday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Wednesday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Thursday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Friday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Saturday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Sunday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          
        </div>
      </div>
    </section>

  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.647506332315!2d77.32186367495375!3d28.550312987810617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f133c3ff67%3A0xc866431a5e2f1091!2sSupernova%20Residency%20(Nova%20East%20%26%20Nova%20West)!5e0!3m2!1sen!2sin!4v1746560717980!5m2!1sen!2sin"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full border-0"></iframe>
</div>

  

    </div>
  )
}

export default ContactPage

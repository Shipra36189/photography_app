import React, { useState , useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiSteeringWheel } from 'react-icons/gi'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/images/pslogo.png'


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [menu , setMenu] = useState(false);
  const handleChange = () =>{
    setMenu(!menu);
  };
  return (
    <>
    <header className={` fixed w-full z-50 text-white py-1 px-6 transition-all duration-300 ${scrolled ? 'bg-amber-300 shadow-md' : 'bg-transparent'}`}>
    
      <nav className='px-4 py-1 flex justify-between items-center'>
        <div className="">
          {/* <a href="" className='font-bold text-2xl'>ps Photography</a> */}
          <img src={logo} alt="" className='w-[100px]' />
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-2xl">
          <Link to="/" className='hover:text-orange-200 transition duration-200 ease-linear'>Home</Link>
          <Link to="/about" className='hover:text-orange-200 transition duration-200 ease-linear'>About</Link>
          <Link to="/gallery" className='hover:text-orange-200 transition duration-200 ease-linear'>Gallery</Link>
          <Link to="/services" className='hover:text-orange-200 transition duration-200 ease-linear'>Services</Link>
          <Link to="/contact" className='hover:text-orange-200 transition duration-200 ease-linear'>Contact</Link>
        </div>
        <Link to="/contact">
        <button className={`hidden lg:flex border-2 border-amber-300 text-lg px-4 rounded-md hover:bg-orange-200 transition duration-200 ease-linear ${scrolled ? 'border-white' : 'border-amber-300'}`}>Contact Us</button></Link>

        <div className='md:hidden flex items-center'>
          {
            menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <RiMenuUnfold2Fill size={25} onClick={handleChange} />
            )
          }
        </div>
      </nav>
{/* responsive section */}
<div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-black opacity-80 text-white left-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300 `}>
  <Link to="/" className='hover:text-orange-200 transition duration-200 ease-linear'>Home</Link>
  <Link to="/about" className='hover:text-orange-200 transition duration-200 ease-linear'>About</Link>
  <Link to="/gallery" className='hover:text-orange-200 transition duration-200 ease-linear'>Gallery</Link>
  <Link to="/services" className='hover:text-orange-200 transition duration-200 ease-linear'>Services</Link>
  <Link to="/contact" className='hover:text-orange-200 transition duration-200 ease-linear'>Contact</Link>
</div>

    </header>

    {/* ✅ WhatsApp Button */}
    <motion.a
        href="https://wa.me/8384037642" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ rotate: 20 }}
        transition={{ type: 'spring', stiffness: 300 }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6"  />
      </motion.a>

<motion.div
  className="fixed top-[60%] left-10 z-50 transform -translate-y-1/2 -rotate-90 origin-left text-green-700 bg-white px-4 py-2 flex items-center gap-2 hover:text-green-800 transition-colors duration-300"
>
  <div className="bg-transparent border-2 border-amber-300 p-2 rounded-full shadow-md ">
    <LuPhoneCall size={30} />
  </div>

  <div className="flex flex-col">
    {/* First Phone Number */}
    <a href="tel:+918434512054" className="text-xl font-semibold whitespace-nowrap">
      +91 8434512054
    </a>
    {/* Second Phone Number */}
    <a href="tel:+918384037642" className="text-xl font-semibold whitespace-nowrap">
      +91 8384037642
    </a>
  </div>
</motion.div>


{/* ✅ Static Social */}
<div className="fixed top-1/3 right-0 z-50 flex flex-col items-end space-y-3 pr-2">
  {/* Instagram Button */}
  <motion.a
    href="https://www.instagram.com/ps_photography______?igsh=NXBqemY2YWU2ZTd5&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center bg-red-500 text-white p-3 rounded-l-full shadow-md cursor-pointer"
    whileHover={{ x: -10 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6"  />
    <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white text-black px-2 py-1 rounded shadow-md whitespace-nowrap">
      ps_photography___
    </span>
  </motion.a>

  {/* Facebook Button */}
  <motion.a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center bg-amber-300 text-white p-3 rounded-l-full shadow-md cursor-pointer"
    whileHover={{ x: -10 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'blue' }} />
    <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white text-black px-2 py-1 rounded shadow-md whitespace-nowrap">
      /yourpage
    </span>
  </motion.a>
</div>
    </>
  )
}

export default Navbar

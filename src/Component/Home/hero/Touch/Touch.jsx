import React from 'react'
import BackImage from '../../../../assets/images/img-5.jpg'
import './Touch.css'
import { Link } from 'react-router-dom';


const Touch = () => {
  return (
    <>
<div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 overflow-hidden"  style={{backgroundImage: `url(${BackImage})`}} >
   <div className="absolute inset-0 bg-[rgba(38,18,56,0.85)]">
   </div>
   <div className="relative flex items-center justify-between h-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
    <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal tracking-wide border-b border-white pb-1 max-w-[60%] leading-tight">
     NEED A PHOTOGRAPHER? GET IN TOUCH
    </h2>

    <Link to="/contact">
    <button aria-label="Read more" className="corner-bracket text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide hover:border-amber-300 items-center">
     <span>READ MORE</span>
    </button>
    </Link>

   </div>
  </div>
  </>
  )
}

export default Touch

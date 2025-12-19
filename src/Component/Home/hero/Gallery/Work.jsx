import React, { useState } from 'react'
import './Work.css'
import GalleryBgPhoto from '../../../../assets/images/wt3.jpeg'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




const Images = [
  `/pictures/img-7.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
  `/pictures/img-8.jpg`,
];


const images = [
  { src: '/pictures/img-8.jpg', alt: 'Image 1' },
  { src: '/pictures/img-8.jpg', alt: 'Image 2' },
  { src: '/pictures/img-8.jpg', alt: 'Image 3' },
  { src: '/pictures/img-8.jpg', alt: 'Image 4' },
];

const Work = () => {


  return (
    <>
    <div className='relative h-[90vh] w-full bg-cover bg-center bg-amber-400 opacity-20' style={{ backgroundImage: `url(${GalleryBgPhoto})` }}>
    <h1 className="font-playfair text-[48px] leading-[56px] text-[#a97c58] mb-6  items-center text-center">My Gallery</h1>
<div className=""></div>
    </div>
    </>
  )
}



export default Work

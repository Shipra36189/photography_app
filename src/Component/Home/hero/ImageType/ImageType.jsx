import React from 'react'
import './ImageType.css'
import PackageImg1 from '../../../../assets/images/img-1.jpg'
import PackageImg2 from '../../../../assets/images/img-2.jpg'
import PackageImg3 from '../../../../assets/images/img-3.jpg'
import PackageImg4 from '../../../../assets/images/img-4.jpg'
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});


const ImageType = () => {

    const images = [PackageImg1, PackageImg2, PackageImg3, PackageImg4];
    const labels = ['WEDDINGS', 'BRANDING', 'ENGAGEMENT', 'LIFESTYLE'];

  return (
    <div className='min-h-screen flex flex-col items-center p-6 sm:p-10 w-full'>
      <h1 className="font-playfair text-[58px] leading-[56px] text-[#a97c58] mb-10"
      initial="hidden"
      whileinview="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp(0.2)}>
      browse our packages
    </h1>
      
  <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-x-10 gap-y-8 max-w-7xl w-full">

  {images.map((img, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp(0.3 + index * 0.2)}
          >
            <img
              src={img}
              alt={labels[index]}
              className="shadow-lg"
              width="300"
              height="500"
            />
            <div className="underline-line"></div>
            <span className="text-[#a87f6f] text-[1.25rem] sm:text-[1.5rem] tracking-wide">
              {labels[index]}
            </span>
          </motion.div>
        ))}

  </div>
    </div>
  )
}

export default ImageType

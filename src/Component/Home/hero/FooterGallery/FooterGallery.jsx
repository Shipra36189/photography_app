import React from 'react'
import { motion } from 'framer-motion';
import './FooterGallery.css'
import galleryImg1 from '../../../../assets/images/wt11.jpeg'
import galleryImg2 from '../../../../assets/images/wt35.jpeg'
import galleryImg3 from '../../../../assets/images/wt35.jpeg'
import galleryImg5 from '../../../../assets/images/wt19.jpeg'
import galleryImg4 from '../../../../assets/images/w11.jpeg'

const FooterGallery = () => {
  return (
    <div className='bg-amber-200 footergallery'>
      <div className="relative max-w-[900px] footer-sec w-full h-[300px]  lg:h-[500px] mx-auto px-4">
   {/* <!-- Top left script text --> */}
   <motion.p className="script-text script-text-large absolute top-[30%] left-[5%] max-w-[250px]  rotate-[-30deg] leading-[1.1]"
   initial={{ opacity: 0, x: -50 }}
   whileInView={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
   viewport={{ once: true }}>
    this could be you, let me capture
    <br/>
    your special moments.
   </motion.p>
   {/* <!-- Center large vertical photo --> */}
   <motion.img alt="" className="center-img absolute top-[15%] left-[40%] w-[180px] sm:w-[150px]  md:w-[180px] lg:w-[220px] xl:w-[300px] h-[350px] object-cover rounded-sm shadow-lg" height="550" src={galleryImg1} 
   initial={{ opacity: 0, y: -50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 1 }}
   viewport={{ once: true }}/>
   {/* <!-- Bottom left horizontal photo --> */}
   <motion.img alt="Color" className="absolute top-[55%] left-[20%] w-[140px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-64 object-cover rounded-sm border-4 border-white shadow-lg" src={galleryImg2}
   initial={{ opacity: 0, x: -30 }}
   whileInView={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
   viewport={{ once: true }} />
   {/* <!-- Top right small photo --> */}
   <motion.img alt="Color" className="top-right absolute top-[10%] left-[75%] w-[80px] sm:w-[100px] md:w-[110px] lg:w-[120px] h-[200px] object-cover rounded-sm border-4 border-white shadow-md" src={galleryImg3}  width="120"
   initial={{ opacity: 0, x: 30 }}
   whileInView={{ opacity: 1, x: 0 }}
   transition={{ duration: 1 }}
   viewport={{ once: true }}/>
   {/* <!-- Right vertical collage container --> */}
   <motion.div className="tilt-img absolute top-[35%] left-[65%] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto flex flex-col space-y-2 rotate-[10deg] border-4 border-white shadow-lg"
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 1 }} 
   viewport={{ once: true }}>
    <motion.img alt="Black" className="tilt-image w-full h-[170px] object-cover" src={galleryImg4} width="160"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}/>
    <motion.img alt="Black" className="tilt-image w-full h-[170px] object-cover" src={galleryImg5} width="160"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}/>
   </motion.div>
  </div>
    </div>
  )
}

export default FooterGallery

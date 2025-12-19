import React from 'react'
import './Offer.css'
import { motion } from 'framer-motion';
import OfferImg1 from '../../../../assets/images/wt10.jpeg'
import OfferImg2 from '../../../../assets/images/wt14.jpeg'

const Offer = () => {
  return (
 <div className='h-[110vh] ipad-h'>
  <section className="relative w-full">
    <motion.div className="relative bg-[#8c4a2f]"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}>
      <motion.div className="max-w-7xl iPad1 mx-auto px-6 sm:px-10 md:px-10 lg:px-20 py-16">
        <h2 className="font-playfair text-white text-[32px] sm:text-[40px] md:text-[40px] leading-[1.1] tracking-wide">
          CAPTURING THE MOMENTS THAT CAPTIVATE YOUR HEART
        </h2>
        <p className="mt-6 text-white text-[16px] sm:text-[18px] md:text-[18px] leading-relaxed tracking-widest uppercase max-w-2xl">
          WE CURATE PREMIUM LEVEL DESIGNS WITH ELEVATED<br />
          EVENTS TO PROVIDE YOU A EXPERIENCE LIKE
          <br />
          NO OTHER
        </p>
      </motion.div>
    </motion.div>

    <motion.div className="max-w-7xl margin-top-42 mx-auto px-6 sm:px-10 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center md:items-start justify-between -mt-20 relative"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}>
      {/* Image Section */}
      <motion.div className="relative image-over w-full md:w-1/2 flex flex-col items-center md:items-start md:pr-10"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
        <motion.img alt="" className="relative z-10 w-[200px] sm:w-[220px] md:w-[220px] rounded-sm shadow-lg mt-10 h-auto max-h-[460px]" src={OfferImg1} 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}/>

        <motion.img alt="" className="absolute ipad-left top-[240px] sm:top-[260px] md:top-[260px] left-[120px] sm:left-[160px] md:left-[160px] w-[200px] sm:w-[250px] md:w-[250px] rounded-sm shadow-lg border border-[#e6e6e6] z-20 h-auto max-h-[450px]" src={OfferImg2}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} />
      </motion.div>

      {/* Text + Buttons Section */}
      <motion.div className="mt-20 txt-btn md:mt-0 w-full md:w-1/2 flex flex-col items-center md:items-center space-y-6"
      initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
        <motion.p className="text-white italic text-[24px] sm:text-[28px] md:text-[28px] tracking-wide font-script"
        
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          we can help with
        </motion.p>
        <motion.button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Proffesionalism
        </motion.button>
        <motion.button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Individual Approach
        </motion.button>
        <motion.button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Flexible Schedule
        </motion.button>
        <motion.button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Changing Room
            </motion.button>
        <motion.button className="bg-[#ad8a1f] text-white uppercase text-[16px] sm:text-[18px] md:text-[18px] tracking-widest font-quattrocento-sans font-semibold px-8 py-4 w-[280px] sm:w-[320px] md:w-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Clean Washroom & warm hospitality
        </motion.button>
      </motion.div>
    </motion.div>
  </section>
</div>
  )
}

export default Offer

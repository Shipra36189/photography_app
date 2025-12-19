import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import FooterLogo from '../../../../assets/images/pslogo.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'


const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black text-gray-700 pt-12 pb-8 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justyfy-between">
    <motion.div className="space-y-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp(0)}
    >
    <img alt="" className="w-46"  src={FooterLogo} />
    <p className="text-gray-700 leading-relaxed">
      At Company Logo, we strive to deliver the best quality products and services to our customers worldwide. Innovation and customer satisfaction are at the heart of everything we do.
    </p>
    </motion.div>

    {/* <!-- Office Time Table --> */}
    <div className=''>
    <h3 className="text-white text-2xl font-semibold mb-4 border-b border-[#000] pb-2">
      Opening Hours
    </h3>
    <table className="w-full text-gray-700 border-collapse">
      <tbody>
      <tr className=''>
        <td className="py-2 font-medium flex items-center space-x-2 ">
        <FaCircleCheck />
        <span>Monday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Tuesday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Wednesday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Thursday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Friday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Saturday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      <tr>
        <td className="py-2 font-medium flex items-center space-x-2">
        <FaCircleCheck />
        <span>Sunday</span>
        </td>
        <td className="py-2 text-right">
        8:00 AM - 8:00 PM
        </td>
      </tr>
      </tbody>
    </table>
    </div>

    {/* <!-- Address --> */}
    <div className=''>
    <h3 className="text-white text-2xl font-semibold mb-4 border-b border-[#000] pb-2">
      Contact &amp; Address
    </h3>
    <address className="not-italic space-y-3 text-gray-700">
      <p className="flex items-center gap-5">
      <FaLocationDot size={20} className='' />
        Supernova nova east sector - 94,
      <br/>
      Noida , Uttar Pradesh
      </p>
      <div className="flex items-center gap-5">
            <FaPhoneAlt size={20} />
            <div className="flex flex-col">
              {/* <Link to="tel:+918434512054" className="text-[16px] hover:text-cyan-400 transition-colors">
                +91 8434512054
              </Link> */}
              <Link to="tel:+918384037642" className="text-[16px] hover:text-cyan-400 transition-colors">
                +91 8384037642
              </Link>
            </div>
          </div>
      <Link to='mailto:pushkar@gmail.com' className="flex items-center gap-5">
      <MdMail size={20} className='' />
      pushkar5271@gmail.com
      </Link>
    </address>
    </div>

    {/* <!-- Social & Newsletter --> */}
    <div className="flex flex-col">
    <div className="">
      <div className="flex space-x-6 text-indigo-400 text-2xl">
       <Link aria-label="Facebook" className="hover:text-indigo-600 transition" to="#">
        <FaFacebookF />
       </Link>
       <Link aria-label="Twitter" className="hover:text-indigo-600 transition" to="#">
       <FaTwitter />
       </Link>
       <Link aria-label="Instagram" className="hover:text-indigo-600 transition" to="https://www.instagram.com/ps_photography______?igsh=NXBqemY2YWU2ZTd5&utm_source=qr">
       <FaInstagram />
       </Link>
       <Link aria-label="LinkedIn" className="hover:text-indigo-600 transition" to="#">
       <FaLinkedinIn />
       </Link>
      </div>
    </div>
    </div>
  </div>

  <motion.div className="mt-12 border-t border-[#000] pt-6 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp(0.7)}>
    <p className="text-gray-700 text-sm">
    &copy; {new Date().getFullYear()} Ps Photography. All rights reserved.
    </p>
  </motion.div>
  </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import './ImageGallery.css'
import { motion} from "framer-motion";
import ContactBgPhoto from '../../../public/pictures/t2.jpeg'
import BgFlower from '../../assets/images/bgflower2.jpg'
import BgGalleryFlower from '../../assets/images/bgflower.jpg'
import slider1 from '../../../public/pictures/t8.jpeg'
import slider2 from '../../../public/pictures/t11.jpeg'
import slider3 from '../../../public/pictures/t13.jpeg'
import slider4 from '../../../public/pictures/t14.jpeg'
import slider5 from '../../../public/pictures/t28.jpeg'
import slider6 from '../../../public/pictures/t8.jpeg'
import slider7 from '../../../public/pictures/t8.jpeg'
import slider8 from '../../../public/pictures/t8.jpeg'
import slider9 from '../../../public/pictures/t8.jpeg'
import slider10 from '../../../public/pictures/t8.jpeg'
import slider11 from '../../../public/pictures/t8.jpeg'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


const images = [
    { src: "/pictures/w1.jpeg", alt: "32" },
    { src: "/pictures/w2.jpeg", alt: "33" },
    { src: "/pictures/w3.jpeg", alt: "34" },
    { src: "/pictures/w4.jpeg", alt: "35" },
    { src: "/pictures/w5.jpeg", alt: "36" },
    { src: "/pictures/w6.jpeg", alt: "37" },
    { src: "/pictures/w7.jpeg", alt: "38" },
    { src: "/pictures/w8.jpeg", alt: "39" },
    { src: "/pictures/t1.jpeg", alt: "1" },
    { src: "/pictures/t2.jpeg", alt: "2" },
    { src: "/pictures/t3.jpeg", alt: "3" },
    { src: "/pictures/t4.jpeg", alt: "4", },
    { src: "/pictures/t5.jpeg", alt: "5", },
    { src: "/pictures/t6.jpeg", alt: "6", },
    { src: "/pictures/t7.jpeg", alt: "7", },
    { src: "/pictures/t8.jpeg", alt: "8", },
    { src: "/pictures/t9.jpeg", alt: "9", },
    { src: "/pictures/t10.jpeg", alt: "10", },
    { src: "/pictures/t11.jpeg", alt: "11", },
    { src: "/pictures/t12.jpeg", alt: "12", },
    { src: "/pictures/t13.jpeg", alt: "13", },
    { src: "/pictures/t14.jpeg", alt: "14", },
    { src: "/pictures/t15.jpeg", alt: "15", },
    { src: "/pictures/t16.jpeg", alt: "16", },
    { src: "/pictures/t17.jpeg", alt: "17", },
    { src: "/pictures/t18.jpeg", alt: "18", },
    { src: "/pictures/t19.jpeg", alt: "19", },
    { src: "/pictures/t20.jpeg", alt: "20", },
    { src: "/pictures/t21.jpeg", alt: "21", },
    { src: "/pictures/t22.jpeg", alt: "22", },
    { src: "/pictures/t23.jpeg", alt: "23", },
    { src: "/pictures/t25.jpeg", alt: "24", },
    { src: "/pictures/t26.jpeg", alt: "25", },
    { src: "/pictures/t27.jpeg", alt: "26", },
    { src: "/pictures/t28.jpeg", alt: "27", },
    { src: "/pictures/t29.jpeg", alt: "28", },
    { src: "/pictures/t30.jpeg", alt: "29", },
    { src: "/pictures/t31.jpeg", alt: "30", },
    { src: "/pictures/t19.jpeg", alt: "31", },
]

const image = {
  single: [
    "/pictures/w1.jpeg", // Column 1
    "/pictures/w1.jpeg", // Column 3
    "/pictures/w1.jpeg", // Column 5
  ],
  stacked: [
    ["/pictures/w1.jpeg", "/pictures/w1.jpeg"], // Column 2
    ["/pictures/w1.jpeg", "/pictures/w1.jpeg"], // Column 4
  ],
};

const ImageGallery = () => {
  const onInit = () => {
        console.log('lightGallery has been initialized');
    };

const columns = [0, 1, 2, 3, 4]; // Representing 5 columns

  return (
    <div className='gallery-section'>

      <div
  className="relative h-[90vh] w-full bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${ContactBgPhoto})` }}
>
  <div className="absolute inset-0 bg-white opacity-30"></div>
  <div className="relative z-10 flex items-center justify-center h-full px-4 text-center ">
  <div>
          {/* Line 1 - slide in from left */}
          <motion.h1
            className="text-[#121342] text-6xl md:text-5xl font-bold font-serif font-[Playfair Display] uppercase"
            initial={{ x: -600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2 }}
          >
            Passion is the essence of clicking great
          </motion.h1>

          {/* Line 2 - slide in from right */}
          <motion.h1
            className="text-[#c7522a] text-6xl md:text-5xl font-bold font-serif font-[Playfair Display] uppercase"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2, delay: 0.2 }}
          >
            Photographs!!
          </motion.h1>
        </div>
  </div>
      </div>


<div className="bg-center bg-cover " >
      <div className="external mt-[-300px] " >
  <div className="horizontal-scroll-wrapper">
    <div className="img-wrapper slower">
      <a href="" target="_blank" rel="noopener">
        <img src={slider1} alt="" />
      </a>
    </div>

    <div className="img-wrapper faster">
      <a href="" target="_blank" rel="noopener">
        <img src={slider2} alt="" />
      </a>
    </div>

    <div className="img-wrapper slower vertical">
      <a href="" target="_blank" rel="noopener">
        <img src={slider3} alt="" />
      </a>
    </div>

    <div className="img-wrapper slower slower-down">
      <a href="" target="_blank" rel="noopener">
        <img src={slider4} alt="" />
      </a>
    </div>

    <div className="img-wrapper">
      <a href="" target="_blank" rel="noopener">
        <img src={slider5} alt="" />
      </a>
    </div>

    <div className="img-wrapper slower">
      <a href="" target="_blank" rel="noopener">
        <img src={slider6} alt="" />
      </a>
    </div>

    <div className="img-wrapper faster1">
      <a href="" target="_blank" rel="noopener">
        <img src={slider7} alt="" />
      </a>
    </div>
    
    <div className="img-wrapper slower slower2">
      <a href="" target="_blank" rel="noopener">
        <img src={slider8} alt="" />
      </a>
    </div>
    
    <div className="img-wrapper">
      <a href="" target="_blank" rel="noopener">
        <img src={slider9} alt="" />
      </a>
    </div>
    
    <div className="img-wrapper slower">
      <a href="" target="_blank" rel="noopener">
        <img src={slider10} alt="" />
      </a>
    </div>
    
    <div className="img-wrapper slower last">
      <a href="" target="_blank" rel="noopener">
        <img src={slider11} alt="" />
      </a>
    </div>
  </div>
</div>


<div className="image-gallery-2  p-[28px] pb-[100px]">
<div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} className='max-w-[100%] block p-1 rounded-[12px] transition-all delay-200 hover:opacity-80 hover:scale-102 hover:shadow-lg' />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
</div>
</div>

<hr className="border-t border-black mt-0 mx-10"/>

<div className="w-full h-auto flex items-center justify-center p-4">

      <div className="grid grid-cols-5 gap-12 max-w-7xl">
        {columns.map((colIndex) => {
          // Even index columns: 0, 2, 4 => Single image
          if (colIndex % 2 === 0) {
            const singleImageIndex = Math.floor(colIndex / 2);
            return (
              <div
                key={colIndex}
                className="flex items-center justify-center"
              >
                <img
                  src={image.single[singleImageIndex]}
                  alt={`Single ${singleImageIndex + 1}`}
                  className="w-[300px] h-full shadow-md"
                />
              </div>
            );
          }

          // Odd index columns: 1, 3 => Stacked images
          const stackedImageIndex = Math.floor(colIndex / 2);
          return (
            <div key={colIndex} className="flex flex-col gap-12">
              {image.stacked[stackedImageIndex].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Stacked ${stackedImageIndex + 1}.${i + 1}`}
                  className="w-[120px] h-[120px]  shadow-md"
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>

    </div>
  )
}



export default ImageGallery

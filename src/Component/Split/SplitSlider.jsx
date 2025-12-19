import React from "react";

const SplitSlider = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Full Height Image */}
      <div className="w-1/2 relative">
        <img
          alt="Wedding couple holding a bouquet of flowers with sunlight shining through"
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/4167af85-b988-4bd3-e35c-0e30fc7dd352.jpg"
        />
        <div className="absolute top-10 left-10 text-white signature-font text-4xl select-none">
          Solem
        </div>
      </div>

      {/* Right Section - Vertical Stack of Images */}
      <div className="w-1/2 relative flex flex-col justify-center items-center">
        {/* Menu text */}
        <div className="absolute top-10 right-10 flex items-center space-x-2 text-white text-xs tracking-widest select-none">
          <span>MENU</span>
          <div className="w-10 border-t border-white"></div>
        </div>

        {/* First Image */}
        <div className="absolute top-20 left-20 w-40 h-56 overflow-hidden">
          <img
            alt="Couple walking on a rocky beach holding hands, back view"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/a1aa/image/dae84905-75aa-4a63-7d4b-d97b1911a880.jpg"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-white text-5xl tracking-widest font-light select-none z-10">
          OUR TIME
        </h1>

        {/* Second Image */}
        <div className="absolute top-48 left-36 w-56 h-56 overflow-hidden shadow-lg">
          <img
            alt="Close up of hands with engagement ring on finger"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/a1aa/image/910d9233-27ac-46d4-5d52-44e7dd5a67a3.jpg"
          />
        </div>

        {/* Third Image */}
        <div className="absolute bottom-20 left-20 w-56 h-72 overflow-hidden shadow-lg">
          <img
            alt="Portrait of bride with veil looking at camera"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/a1aa/image/d8166aa9-a097-4ace-4b74-7772baa740b5.jpg"
          />
        </div>

        {/* Editorial Text */}
        <div className="absolute bottom-10 right-10 text-white signature-font text-5xl select-none">
          Editorial
        </div>

        {/* Vertical Lines (Design) */}
        <div className="absolute top-1/2 right-10 flex flex-col items-center space-y-8 text-white select-none">
          <div className="w-2 h-2 rotate-45 bg-[#d9cdc1]"></div>
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 bg-white"></div>
          </div>
          <div className="w-2 h-2 rotate-45 bg-[#d9cdc1]"></div>
          <div className="w-2 h-2 rotate-45 bg-[#d9cdc1]"></div>
        </div>
      </div>
    </div>
  );
};

export default SplitSlider;

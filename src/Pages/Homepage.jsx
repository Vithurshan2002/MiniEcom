import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:px-30 bg-gradient-to-tr from-black py-20  to-white">
      <div>
        <h1 className="sm:text-5xl text-3xl px-2 font-bold font-[poppins] text-center text-white"> Welcome to <span className="text-black">Bit</span><span className="text-blue-900">Za</span> ,Where<br/> Every Bite is a Delight!</h1>
        <div className="flex justify-center space-x-4 py-6">
          <buttton className='block font-bold  p-2 bg-blue-800 cursor-pointer hover:bg-blue-400 transition-all px-2  rounded text-white'>Contact Us</buttton>
          <buttton  className='block font-bold  p-2 bg-green-800 cursor-pointer hover:bg-green-400 transition-all   rounded text-white'>Explore span</buttton>
        </div>
      </div>

      <div className="w-100 h-100">
        <img src="home.png" alt="noImage" className=" w-full h-full object-cover"  />
      </div>
    </div>
  );
};

export default Homepage;

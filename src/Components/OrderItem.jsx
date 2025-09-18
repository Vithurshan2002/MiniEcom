import React, { useState } from "react";

const OrderItem = () => {
  const Decrese = () => {
     if (qty >1) {
      setqty((pre) => Number(pre) - 1);
    }
  };

  const Increse = () => {
    if (qty >= 0) {
      setqty((pre) => Number(pre) + 1);
    }
  };
  const [qty, setqty] = useState(1);
  return (
    <div className="flex items-center justify-between sm:px-10 px-2 sm:flex-3 border-3 border-blue-800 my-2 bg-green-500 rounded-xl shadow-2xs">
      <div className="flex items-center sm:space-x-15 space-x-2">
        <div className="w-15">
          <img src="home.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-bold text-white sm:text-2xl">Pizza</h1>
        </div>
      </div>

      <div className="flex items-center sm:space-x-15 space-x-3">
        <div className="flex">
          <div
            onClick={Decrese}
            className="border w-5 h-5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m14 17l-5-5l5-5z" />
            </svg>
          </div>
          <div className="border-2 bg-white w-10 h-5 flex justify-center border-blue-700  items-center">
            <span className="text-black font-extrabold">{qty}</span>
          </div>
          <div
            onClick={Increse}
            className=" border w-5 h-5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path fill="#currentColor" d="M10 17V7l5 5z" />
            </svg>
          </div>
        </div>
        <div className="sm:text-sm  text-xs  ">
          <p className="font-extrabold text-blue-900">$400.50</p>
          <p className="font-semibold text-xs">$400.50 /perItem</p>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="animate-pulse cursor-pointer hover:animate-none"
        >
          <path
            fill="#e60a2e"
            d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </div>
    </div>
  );
};

export default OrderItem;

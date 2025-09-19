import React from "react";
import { NavLink } from "react-router-dom";

const ShippingInfor = () => {
  return (
    <div className="flex  justify-center bg-[url('https://media.istockphoto.com/id/2186978513/photo/six-young-people-taking-a-slice-of-pizza-in-a-pub.jpg?s=612x612&w=0&k=20&c=x42VCiwT6yl7thsUrwpnaciOrKYckZoyVOBiHaZhMoQ=')] bg-cover grayscale-25">
      <div className=" rounded-lg shadow-2xl shadow-black  w-150 my-20 sm:mx-0 mx-5 p-5 bg-gradient-to-r from-white via-transparent  to-white">
        <h1 className=" text-center font-extrabold text-3xl text-shadow-white text-shadow-2xs text-black pb-4">
          Delivery Address
        </h1>
        <form>
          <div className="py-1">
            <label htmlFor="fullname" className="font-bold text-[17px]">
              Full Name
            </label>
            <div>
              <input
                type="text"
                id="fullname"
                placeholder="Enter Your Name"
                className=" ps-1 font-semibold bg-white border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="py-1">
            <label htmlFor="email" className="font-bold text-[17px]">
              Email
            </label>
            <div>
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                className=" ps-1 font-semibold bg-white border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="py-1">
            <label htmlFor="address" className="font-bold text-[17px]">
              Address
            </label>
            <div>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                className=" ps-1 font-semibold bg-white border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex space-x-15 py-1">
            <div className="flex-1 ">
              <label htmlFor="state" className="font-bold text-[17px]">
                State
              </label>
              <div>
                <input
                  type="text"
                  id="state"
                  placeholder="Your State"
                  className=" ps-1 font-semibold bg-white  border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="pcode" className="font-bold text-[17px]">
                PostalCode
              </label>
              <div>
                <input
                  type="text"
                  id="pcode"
                  placeholder="Your PotalCode"
                  className=" ps-1 font-semibold bg-white  border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-15 py-1">
            <div className="flex-1">
              <label htmlFor="country" className="font-bold text-[17px]">
                Country
              </label>
              <div>
                <input
                  type="text"
                  id="country"
                  placeholder=" Your Country"
                  className=" ps-1 font-semibold bg-white border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="pno" className="font-bold text-[17px]">
                Phone no
              </label>
              <div>
                <input
                  type="text"
                  id="pno"
                  placeholder=" Your PhoneNo"
                  className=" ps-1 font-semibold bg-white  border-3 border-blue-700 focus:border-green-700  outline-0 rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10">
           <NavLink to={'/confirmorder'} className='w-full'> <button className="font-bold w-full text-white bg-emerald-800 px-2 py-1 rounded-lg hover:bg-emerald-600 transition-all cursor-pointer">
              Confirm Address
            </button></NavLink>
          </div>
        </form>

        <div className="flex items-center relative top-5 right-5 w-fit ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-black animate-pulse duration-200 cursor-pointer"
              >
                <path fill="currentColor" d="m14 17l-5-5l5-5z" />
              </svg>
          
         <NavLink to={'/card'}> <button className="cursor-pointer  hover:text-blue-700 transition-all text-xs font-bold">Back To Card</button> </NavLink>
        </div>
       
      </div>
    </div>
  );
};

export default ShippingInfor;

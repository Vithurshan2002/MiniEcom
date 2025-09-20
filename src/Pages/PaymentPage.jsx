import React from "react";
import { NavLink } from "react-router-dom";
import { PiCreditCardBold } from "react-icons/pi";
import { RiMastercardFill } from "react-icons/ri";
import { LiaCcVisa } from "react-icons/lia";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
const PaymentPage = () => {
  return (
    <div className="flex  justify-center bg-[url('https://media.istockphoto.com/id/2186978513/photo/six-young-people-taking-a-slice-of-pizza-in-a-pub.jpg?s=612x612&w=0&k=20&c=x42VCiwT6yl7thsUrwpnaciOrKYckZoyVOBiHaZhMoQ=')] h-screen bg-cover grayscale-25">
      <div className=" rounded-lg shadow-2xl shadow-black  w-100 h-fit my-20 sm:mx-0 mx-5 p-5 bg-white">
        <h1 className="text-xl font-bold text-center">
          Choose your payment method
        </h1>
        <div className="border-2 border-blue-700 py-2 hover:bg-blue-200 transition-all mt-5 my-4 cursor-pointer">
          <div className="flex justify-between px-4">
            <div className="flex items-center space-x-5">
              <PiCreditCardBold />
              <div className="font-bold">Credit/Debit Card</div>
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <LiaCcVisa className="text-blue-700" />
              </div>
              <div>
                <RiMastercardFill className="text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-700 py-2 hover:bg-blue-200 transition-all cursor-pointer ">
          <div className="flex justify-between px-4">
            <div className="flex items-center space-x-5">
              <PiCreditCardBold />
              <div className="font-bold">Cash on Delivery</div>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-700 py-2 hover:cursor-not-allowed hover:bg-red-300  transition-all mt-5 my-4">
          <div className="flex justify-between px-4">
            <div className="flex items-center space-x-5">
              <RiMoneyDollarBoxLine />
              <div className="font-bold">Instalment</div>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-700 py-2 hover:cursor-not-allowed hover:bg-red-300  transition-all mt-5 my-4">
          <div className="flex justify-between px-4">
            <div className="flex items-center space-x-5">
              <RiMoneyDollarBoxLine />
              <div className="font-bold">EMI</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-5">
          <button className="border px-4 py-1 cursor-pointer bg-emerald-700 text-white font-bold hover:bg-emerald-500 transition-all rounded-full">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

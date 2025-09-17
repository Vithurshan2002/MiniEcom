import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-amber-400 p-5">
      <div className="sm:border-2 border-white border-dashed sm:p-2 ">
        <div className="grid sm:grid-cols-3  grid-col-1 gap-4">
          <div className="border-2 p-2 border-white">
            <h1 className="font-bold text-[#EAF2F8] ">About Us</h1>
            <p className="text-sm font-bold ">
              Bitza is your trusted online store offering quality products at
              the best prices. We bring convenience, reliability, and great
              deals right to your fingertips
            </p>
          </div>
          <div className="border-2 border-white">
            <div className="grid grid-cols-2 px-8">
              <div>
                <h1 className="font-bold text-[#EAF2F8] ">Quick Links</h1>
                <ul className="text-sm font-bold">
                  <li className="">Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-[#EAF2F8]">QCustomer Support</h1>
                <ul className="text-sm  font-bold">
                  <li>FAQ</li>
                  <li>Shipping & Returns</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-2 text-center border-white p-1">
            <h1 className="text-[#EAF2F8] font-bold">GET IN TOUCH</h1>
            <p className="font-bold text-sm py-1">Contact No:- 0761234567</p>
            <p className="font-bold text-sm py-1">
              Email:- <a href="" className="underline underline-offset-2">Bitza2002@gmail.com</a>
            </p>
            <div className="flex justify-center py-2 space-x-5">
              <div className="border p-1 rounded-full bg-blue-600 hover:scale-110 transition-all">
                <FaFacebookF  className="text-blue-100 cursor-pointer "/>
              </div>
              <div className="border p-1 rounded-full bg-blue-300 hover:scale-110 transition-all" >
                <FaInstagram className="text-red-700 cursor-pointer" />
              </div>
              <div className="border p-1 rounded-full bg-blue-400 hover:scale-110 transition-all">
                <FaTwitter className="text-blue-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

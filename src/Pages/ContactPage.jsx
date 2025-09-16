import React from "react";
import { Element } from "react-scroll";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
const ContactPage = () => {
  return (
    <Element name="contact">
      <div className="py-15 bg-gradient-to-t from-black ">
        <h1 className="text-3xl font-bold text-green-800 text-center">Contact Us</h1>
        <p className="py-3 text-sm text-black font-semibold font-[poppins] text-center">
          We'd love to hear from you! Whether you have a question about our
          products, orders, shipping, or anything else, our team is ready to
          help.
        </p>
        <div className=" flex flex-col sm:flex-row space-x-8 px-8 pt-4 space-y-6 items-center">
          <div className="flex-1 w-100 ms-8 border-2 border-white rounded">
            <img src="vithu.png" alt="noimage" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 border-white shadow-2xl  p-5 rounded bg-white sm:max-w-lg w-full">
            <form>
              <div className="flex items-center space-x-1 text-blue-600">
                <FaUserCircle />
                <p className="font-bold"> Full Name</p>
              </div>
              <div className="pb-2">
                <input
                  type="text"
                  placeholder="Enter Your FullName"
                  className="w-full  border-3 italic rounded outline-0 ps-2 font-semibold focus:border-green-700 transition-all  "
                />
              </div>

              <div className=" text-blue-600 font-bold flex items-center space-x-1">
                <MdEmail />
                <p>Email Address</p>
              </div>
              <div className="pb-2">
                <input
                  type="email"
                  placeholder="Enter Your EmailAddress"
                  className="w-full  border-3 italic rounded outline-0 ps-2 font-semibold focus:border-green-700 transition-all "
                />
              </div>

              <div className=" text-blue-600 font-bold flex items-center space-x-1">
                <IoMdCall />
                <p>Contact No</p>
              </div>
              <div className="pb-2">
                <input
                  type="text"
                  placeholder="Enter Your ContactNo"
                  className="w-full  border-3  rounded outline-0 ps-2 font-semibold focus:border-green-700 transition-all "
                />
              </div>

              <div className=" text-blue-600 font-bold flex items-center space-x-1">
                <MdOutlineMessage />
                <p>Write Message</p>
              </div>
              <div>
                <textarea placeholder="Write Message" className="w-full  italic border-3  rounded outline-0 ps-2 font-semibold focus:border-green-700 transition-all "></textarea>
              </div>
              <div className="flex justify-center py-2">
                <button className="text-sm font-bold border-2 px-3 py-2 cursor-pointer bg-green-600 transition-all hover:bg-green-500 text-white rounded-full ">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactPage;

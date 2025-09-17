import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 items-center py-4 bg-gradient-to-r from-gray-100 to-blue-300 sticky top-0 z-100 ">
        <h1 className="text-5xl font-extrabold  from-blue-900">
          Bit<span className="text-blue-800">Za</span>
        </h1>

        <ul className="sm:flex space-x-2 sm:space-x-5 md:space-x-10 md: hidden">
          <Link to="home" smooth={true} duration={1000}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              Home
            </li>
          </Link>

          <Link to="dishes" smooth={true} duration={1000}>
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              Dishes
            </li>
          </Link>

          <Link to="about" smooth={true} duration={1000}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              About
            </li>
          </Link>

          <Link to="menu" smooth={true} duration={1000}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              Menu
            </li>
          </Link>

          <Link to="reviews" smooth={true} duration={1000}>
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              Reviews
            </li>
          </Link>

          <Link to="contact" smooth={true} duration={1000}>
            <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
              Contact Us
            </li>
          </Link>
        </ul>

        <div className="flex items-center space-x-2 tran">
          <Link to={'/login'}>
            <button className="text-xl font-bold border-2 px-2 py-1 hover:border-green-900 rounded cursor-pointer hover:text-white transition-all">
              Login
            </button>
          </Link>
          <div
            className="flex sm:hidden hover:bg-blue-200 rounded-lg transition-all cursor-pointer"
            onClick={() => {
              const scn = document.getElementsByClassName("scn");
              scn[0].classList.toggle("-translate-y-200");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M5 5L19 19M5 19L19 5">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    dur="0.4s"
                    values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"
                  />
                </path>
                <path d="M12 12H12" opacity="0">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.2s"
                    dur="0.4s"
                    values="M12 12H12;M5 12H19"
                  />
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.2s"
                    to="1"
                  />
                </path>
              </g>
            </svg>
          </div>
          <div className="cursor-pointer  realative ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-green-600 hover:text-black transition-all"
              >
                <path
                  fill="currentColor"
                  d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
                />
              </svg>
            </div>
            <div className="w-6 h-6 font-bold text-white bg-green-500 rounded-full absolute top-2 right-2 flex justify-center items-center">
              5
            </div>
          </div>
        </div>
      </div>
      {/* for mobile  */}
      <div className=" border-t-4 border-b  border-y-blue-800  bg-gradient-to-br from-blue-600 from-20% to-blue-100  w-full sm:hidden -translate-y-200 scn  duration-600 ease-in-out z-20 fixed ">
        <ul className="text-2xl flex flex-col text-center space-y-2 ">
          <Link to="home" smooth={true} duration={500}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white   w-full  transition-all hover:scale-105">
              Home
            </li>
          </Link>

          <Link to="dishes" smooth={true} duration={500}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full transition-all hover:scale-105">
              Dishes
            </li>
          </Link>

          <Link to="about" smooth={true} duration={500}>
            {" "}
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
              About
            </li>
          </Link>

          <Link to="menu" smooth={true} duration={500}>
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
              Menu
            </li>
          </Link>

          <Link to="reviews" smooth={true} duration={500}>
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
              Reviews
            </li>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

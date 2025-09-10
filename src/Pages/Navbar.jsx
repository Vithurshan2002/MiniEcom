import React from "react";

const Navbar = () => {
  /* const button = document.getElementsByClassName("rbuton");
 
  console.log(button)
/*   button.addEventListener('click',()=>{
                
  }) */

  return (
    <>
      <div className="flex justify-between px-5 items-center py-4 bg-gradient-to-r from-gray-100 to-blue-300 sticky top-0">
        <h1 className="text-5xl font-extrabold  from-blue-900">
          Bit<span className="text-blue-800">Za</span>
        </h1>
        <ul className="sm:flex space-x-2 sm:space-x-5 md:space-x-10 md: hidden">
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            Home
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            Dishes
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            About
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            Menu
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            Reviews
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:underline underline-offset-3 hover:text-emerald-700 transition-all hover:scale-105 text-xl">
            Order
          </li>
        </ul>

        <div className="flex items-center space-x-2 ">
          <div
            className="flex sm:hidden hover:bg-blue-200 rounded-lg transition-all cursor-pointer"
            onClick={() => {
              const scn = document.getElementsByClassName("scn");
              scn[0].classList.toggle("translate-x-200");
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
          <div className="cursor-pointer ">
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
        </div>
      </div>
      {/* for mobile  */}
      <div className=" border-t-4 border-b  border-y-blue-800  bg-gradient-to-br from-emerald-200 from-20% to-blue-200 absolute w-full sm:hidden  scn  duration-600 ease-in-out ">
        <ul className="text-2xl flex flex-col text-center space-y-2 ">
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white   w-full  transition-all hover:scale-105">
            Home
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full transition-all hover:scale-105">
            Dishes
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
            About
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
            Menu
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
            Reviews
          </li>
          <li className="font-bold font-[poppins] cursor-pointer hover:bg-blue-500 hover:text-white  w-full  transition-all hover:scale-105">
            Order
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

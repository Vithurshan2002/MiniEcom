import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[url(hotel.jpg)] bg-cover">
      <div className="p-6 border-4  border-white rounded-lg bg-gradient-to-br from-purple-500">
        <h1 className="font-bold text-4xl text-center font-[poppins] text-shadow-md pb-8 text-white">
          Register
        </h1>
        <div className="flex sm:flex-row flex-col sm:space-x-2 space-y-3 sm:space-y-0">
          <div className="flex items-center border-3 border-blue-800  px-2 rounded-full bg-white">
            <div>
              <input
                type="text"
                placeholder="Firstname"
                className="font-semibold text-blue-900 outline-0"
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <path
                  fill="currentColor"
                  d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4t2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 18v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center border-3 border-blue-800  px-2 rounded-full bg-white">
            <div>
              <input
                type="text"
                placeholder="Lastname"
                className="font-semibold text-blue-900 outline-0"
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <path
                  fill="currentColor"
                  d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4t2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 18v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center border-3  border-blue-800 px-2 rounded-full my-3 bg-white">
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="font-semibold  text-blue-900 outline-0  w-full"
            />
          </div>
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-blue-600"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center border-3 border-blue-800 px-2 rounded-full my-3 bg-white">
          <div className="w-full">
            <input
              type="password"
              placeholder="password"
              className="font-semibold text-blue-900 outline-0 w-full"
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="text-blue-600"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-2V7a4 4 0 1 1 8 0v4m-1 5h.01m-3 0h.01m-3 0h.01"
              />
            </svg>
          </div>
        </div>

        <button className=" border-1 w-full font-bold bg-blue-500 text-white hover:bg-blue-300 transition-all cursor-pointer rounded-full mt-2">
          Create account
        </button>
          <p className="text-center pt-5 py-3 text-white text-xs font-semibold">Or register with</p>
        <div className="flex justify-evenly">
          <div className="flex border-white items-center space-x-2 border px-2 py-1 rounded-full cursor-pointer"><FcGoogle className="block"/><div className="font-bold text-xs text-black">Google</div></div>
          <div className="flex border-white items-center space-x-2 border px-2 py-1 rounded-full cursor-pointer"><FaFacebook className="block text-blue-500"/><div className="font-bold text-xs text-black">Facebook</div></div>
        </div>
        <p className=" pt-5 text-xs font-bold text-white text-center">
          Already have an account ? <Link to={"/login"}> <span className="font-bold text-black underline cursor-pointer hover:text-blue-400 transition-all">
               Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

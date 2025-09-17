import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[url(hotel.jpg)] bg-cover">
      <div className="p-6 border-4  border-white rounded-lg bg-gradient-to-br from-purple-500 ">
        <h1 className="font-bold text-4xl text-center font-[poppins] text-shadow-md pb-8 text-white">Login</h1>
        <div className="flex items-center border-3 border-blue-800  px-2 rounded-full bg-white">
          <div>
            <input
              type="email"
              placeholder="Email"
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
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center border-3 border-blue-800 px-2 rounded-full my-3 bg-white">
          <div>
            <input
              type="password"
              placeholder="Password"
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
        

        

        <div className="flex justify-between text-xs font-bold">
          <div className="flex space-x-1  items-center  ">
             <div> <input type="checkbox" name="password" className="mt-1 border-0 text-black"/></div>
             <div className="text-white">Remember me</div>
          </div>
          <div className="mt-0.5 text-white">Forgot password ?</div>
        </div>
        <button className=" border-1 w-full font-bold bg-green-500 text-white hover:bg-green-300 transition-all cursor-pointer rounded-full mt-2">Login</button>
      
      <p className=" pt-4 text-xs font-bold text-white text-center">Don't have an account ? <Link to={"/register"}><span className="font-bold text-blue-800 underline cursor-pointer hover:text-black transition-all" >Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;

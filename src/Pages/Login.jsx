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
              type="text"
              placeholder="Username"
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

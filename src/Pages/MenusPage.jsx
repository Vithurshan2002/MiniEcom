import React from "react";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";
const MenusPage = () => {
  return (
    <Element id="menu">
      {" "}
      <div className="py-20">
        <p className=" font-bold text-blue-900 text-center">Our Menu</p>
        <h1 className="text-2xl text-emerald-950 font-bold text-center">
          Explore Our Dishes
        </h1>
        <div className="flex sm:flex-row flex-col gap-15  px-10 pt-10">
          <div className=" shadow-2xl rounded flex flex-col items-center group p-4 bg-white border flex-1">
            <div className="w-60 h-50">
              <img
                src="https://sbam.in/aagrah-banquet/wp-content/uploads/2025/04/Best-Indian-Starter-Ideas-for-Dinner-Party-.jpg"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-all"
              />
            </div>
          <NavLink to={'/starters'} className="w-full ">  <div className="text-center mt-4 border-3 rounded-lg px-3  bg-green-800 cursor-pointer transition-all border-white hover:border-black hover:bg-green-600 ">
              <h1 className="text-xl font-bold pb-1 text-white">Starters</h1>
            </div></NavLink>
          </div>

          <div className=" shadow-2xl rounded flex flex-col items-center  group p-4 bg-white border flex-1">
            <div className="w-60 h-50">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/2/2019/10/134_Roma_9780451497017_art_r1-facac84.jpg?quality=90&resize=700,466"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-all"
              />
            </div>
           <NavLink to={'/maincourses'} className="w-full "> <div className="text-center mt-4 border-3 rounded-lg px-3  w-full bg-green-800 cursor-pointer transition-all border-white hover:border-black hover:bg-green-600 ">
              <h1 className="text-xl font-bold pb-1 text-white">Main Courses</h1>
            </div></NavLink>
          </div>

          <div className="shadow-2xl rounded flex flex-col items-center  p-4 bg-white border flex-1 group">
            <div className="w-60 h-50">
              <img
                src="https://d3rctclhuobtt7.cloudfront.net/Pictures/480xany/6/7/8/337678_mademoiselledessertschocolatecherrycreamcake2100x1400_459167.jpg"
                alt=""
                className="w-full h-full  object-cover group-hover:scale-105 transition-all"
              />
            </div>
             <NavLink to={'/desserts'} className="w-full "> <div className="text-center mt-4 border-3 rounded-lg  w-full   bg-green-800 cursor-pointer transition-all border-white hover:border-black hover:bg-green-600 ">
              <h1 className="text-xl font-bold pb-1 text-white">Desserts</h1>
            </div></NavLink>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default MenusPage;

import { NavLink } from "react-router-dom";
import OrderItem from "../Components/OrderItem";

const CardPage = () => {
  return (
    <div className="sm:p-5 sm:h-screen p-2 bg-gradient-to-br from-sky-600">
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-5">
        <div className="sm:flex-3 rounded-lg shadow-2xs shadow-white p-2 bg-white pb-10 mt-5">
          <div className="flex justify-between items-center sm:px-20  px-5 pt-2 pb-7">
            <div className="font-extrabold sm:text-4xl text-lg text-red-800">
             Your Shopping Card
            </div>
            <h1 className="font-extrabold text-xl text-red-800">
              <span className="text-blue-800">4</span> Items
            </h1>
          </div>

          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>

        <div className=" sm:flex-1 px-2 h-fit sm:mt-20 mb-10 bg-gradient-to-bl from-gray-400 via-white to-gray-400  rounded-lg">
          <h1 className="text-center font-extrabold text-4xl text-blue-800 text-shadow-2xs text-shadow-black py-4">
            Total
          </h1>
          <div className="flex justify-between py-2">
            <p className="font-bold">Total Price: </p>
            <p className="font-semibold">$400.50</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold">Discount: </p>
            <p className="font-semibold">$40.50</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold">TAX: </p>
            <p className="font-semibold">$15.50</p>
          </div>
          <div className="h-0.5 w-full  bg-blue-800 my-2"></div>
          <div className="flex justify-between py-2">
            <p className="font-bold">Total: </p>
            <p className="font-extrabold text-green-700">$456.50</p>
          </div>
          <div className="flex justify-center py-3 px-5">
            <button className="bg-blue-800 text-white  w-full font-bold cursor-pointer hover:bg-blue-400  px-2 py-1  rounded text-sm transition-all text-center">
              Make Purchase
            </button>
          </div>
          <div className="flex justify-center py-3 px-5">
            <NavLink to={"/"}>
             
              <button className=" border w-full font-semibold cursor-pointer hover:bg-blue-100  px-2 py-1  rounded text-sm transition-all text-center">
                Back to Shop
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;

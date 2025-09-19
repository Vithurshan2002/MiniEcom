import React from 'react'
import ConfirmOrderItem from '../Components/ConfirmOrderItem'
import { NavLink } from 'react-router-dom'


const ConfirmOrder = () => {
  return (
    <>
    <div className='flex flex-col sm:flex-row'>
      <div className='flex-4/6 px-4 pt-4'>
        <h1 className=' text-3xl font-bold pb-2'>Order Items</h1>
      <ConfirmOrderItem/>
      <ConfirmOrderItem/>
      <ConfirmOrderItem/>
      <ConfirmOrderItem/>
      </div>


      <div className='flex-2/6 px-4 py-4 space-y-15'>
        <div className='border-1 p-2 ps-2'>
        <h1 className=' font-bold py-2 '>Shipping Address Infor</h1>
        
        <div className='flex items-center justify-between space-x-4'>
          <div className='font-semibold text-xs'>
          Nunavil East,
          Kalvayal,
          Chavakachcheri,
          Jaffna.
        </div>
        <div><NavLink to={'/shippingInfor'}><button className='text-sm sm:text-xs bg-blue-500 hover:bg-blue-300 transition-all cursor-pointer text-white font-semibold px-2 rounded-full py-1'>Change Address</button></NavLink></div>
        </div>
        </div>


            <div className=" mb-10 border-dashed p-2 border-2 border-blue-700">
          <h1 className=" font-bold text-xl  py-4">
            Order Summary
          </h1>
          <div className="flex justify-between py-2 px-4 ">
            <p className="font-bold">Total Price: </p>
            <p className="font-semibold">$400.50</p>
          </div>
          <div className="flex justify-between py-2 px-4 ">
            <p className="font-bold">Discount: </p>
            <p className="font-semibold">$40.50</p>
          </div>
          <div className="flex justify-between py-2 px-4">
            <p className="font-bold">TAX: </p>
            <p className="font-semibold">$15.50</p>
          </div>
          <div className="h-0.5 w-full  bg-blue-800 my-2"></div>
          <div className="flex justify-between py-2 px-4">
            <p className="font-bold">Total: </p>
            <p className="font-extrabold text-green-700">$456.50</p>
          </div>
          <div className="flex justify-center py-3 px-5">
            <NavLink to={"/paymentpage"} className="w-full">
              <button className="bg-green-800 text-white  w-full font-bold cursor-pointer hover:bg-green-400  px-2 py-1  rounded text-sm transition-all text-center">
               Check Out
              </button>
            </NavLink>
          </div>
         
        </div>
      </div>


    </div>
    
     

</>




     




  )
}

export default ConfirmOrder
import React from 'react'
import { Rating } from '@mui/material';
const Item = () => {
  return (
    <div className=' shadow-2xl rounded flex flex-col items-center p-4 bg-white'>
        <div className='w-50 h-50'>
            <img src="home.png" alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='text-center'>
            <h1 className='text-xl font-bold pb-1'>Tasty Food</h1>
            <div className='pb-1'><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
            <div className='flex space-x-4 items-center'>
                <p className='text-xl font-bold text-emerald-800'>Rs.500.00</p>
                <button className='bg-blue-800 px-2 py-1 text-white  cursor-pointer  hover:bg-blue-400 transition-all font-medium  rounded-full'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Item
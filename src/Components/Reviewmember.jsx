import React from 'react'
import { Rating } from '@mui/material';
const Reviewmember = () => {
  return (
     <div className='border-x-2 border-y-5  p-3 shadow-2xl bg-white ' >
      <div className='flex flex-col sm:flex-row items-center justify-between '>
        <div className='min-w-20 max-w-20 border rounded-full p-1 mb-2'>
          <img src="https://avatar.iran.liara.run/public/boy" alt="noimage" />
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='font-bold text-xl'>John Doe</h1>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-opacity=".9"
              d="M2.5 5H11v7.65L6.518 19H3.795l2.666-6H2.5zM13 5h8.5v7.65L17.018 19h-2.723l2.666-6H13z"
            />
          </svg>
        </div>
      </div>

      <div className='font-semibold text-sm sm:text-lg pb-5'>
        "Bitza made my shopping experience so easy! The website is fast, secure,
        and the product quality is just as described. I'll definitely order
        again."
      </div>
    </div>
  )
}

export default Reviewmember
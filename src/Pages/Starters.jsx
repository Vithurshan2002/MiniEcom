import React from 'react'
import Item from '../Components/Item'

const Starters = () => {
  return (
    <div className='py-5 alata-regular'>
         <div className='h-1 w-full bg-blue-600 mb-3'></div>
        <h1 className='font-bold text-3xl   text-emerald-700 text-center'>Starters Menu</h1>
    <div className='h-1 w-full bg-blue-600 mt-3'></div>
    <div className='grid grid-cols-1 ux:grid-cols-2 sm:grid-cols-4 gap-8 pt-10 px-10'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
    </div>
  )
}

export default Starters
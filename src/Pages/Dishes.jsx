import React from 'react'
import Item from '../Components/Item'
import {Element } from 'react-scroll';
const Dishes = () => {
  return (
     <Element name="dishes"><div className='py-10 bg-gray-200'>
        <p className=' font-bold text-blue-900 text-center'>Our Dishes</p>
        <h1 className='text-2xl text-emerald-950 font-bold text-center'>POPULAR DISHES</h1>
        <div className='grid sm:grid-cols-3 ux:grid-cols-2 gap-10 sm:px-30 px-10 pt-8 '>
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
    </div></Element>
  )
}

export default Dishes
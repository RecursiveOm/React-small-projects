import React from 'react'
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>

      <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold'>
          Prospective <br />
          <span>Customer</span>
          <br />
          Segmentation
        </h3>

        <p className='text-xl font-medium text-gray-600'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Alias doloremque perspiciatis cumque, eveniet recusandae a laborum
          vero! Aperiam, at culpa.
        </p>
      </div>

      <div className='text-xl'>
        <ArrowUpRight />
      </div>

    </div>
  )
}

export default LeftContent 
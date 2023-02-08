import React from 'react'
import BrandIcon from '../svgs/BrandIcon'

const Footer = () => {
  return (
   <>
      <div className='w-full md:w-[90%] pt-12 pb-8 px-8'>
        <div className='text-[16px] flex flex-wrap gap-8 justify-between text-white'>
            <div className=' font-medium  w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
            <div className=' font-medium  w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
            <div className=' font-medium  w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
            <div className=' font-medium w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
            <div className='font-medium w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
            <div className=' font-medium w-32 flex flex-col gap-4'>
                <h4 className='text-[14px] text-gray-400'>Product</h4>
                <h5>Overview</h5>
                <h5>Features</h5>
                <h5>Solutions</h5>
                <h5>Tutorials</h5>
                <h5>Pricing</h5>
                <h5>Releases</h5>
            </div>
        </div>
        <div className='w-full border-b-2 my-8 border-white'></div>
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex-1 flex gap-3 items-center'>
                <span><BrandIcon/></span>
                <span className='font-semibold'>Untitled UI</span>
            </div>
            <h3 className='text-gray-300'>&copy; 2077 Untitles UI. All rights reserved</h3>
        </div>
      </div>
   </>
  )
}

export default Footer
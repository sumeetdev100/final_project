import React from 'react'

const HomeHeader = () => {
  return (
    <div className='w-full h-[402px] flex justify-center items-center bg-[#F9FAFB]'>
        <div className='w-[95%] md:w-[90%] h-[80%] flex flex-col px-2'>
            <p className='text-[#7F56D9] text-[14px] font-medium'>Blog</p>
            <div className='flex flex-col md:flex-row'>
            <h1 className='text-[36px] flex-1 md:text-[48px] font-semibold'>Resource Library</h1>
            <p className='md:w-96 mt-2 md:mt-4 text-[18px] md:text-[20px] text-gray-500'>Subscrive to know more about new product features the latest in technology, solutions and updates.</p>
            </div>
           <div className='mt-4 flex flex-col md:flex-row gap-5'>
               <div>
               <input type="text" placeholder="Enter your email here" className="input input-bordered w-[343px] md:w-96" />
                <p className='text-gray-500 text-[14px] mt-2'>We care about your data in our <u>privacy policy</u></p>
               </div>
                <button className='p-3 h-12 px-4 text-white font-medium rounded-xl bg-[#7F56D9] text-[16px]'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader
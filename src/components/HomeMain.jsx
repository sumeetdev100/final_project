import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";


const HomeMain = () => {

    const [articles,setArticles] = useState(null);

    useEffect(()=>{
        fetch('http://172.25.24.29:3000/article')
        .then(data=>data.json())
        .then(data=>setArticles(data));
    },[])

    console.log(articles);

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90%] h-full'>
        <div className='mt-16 w-full hidden  md:flex flex-col gap-6 md:flex-row justify-start text-[16px]'>
            <button className='hover:bg-gray-100 p-3 rounded-lg'>View All</button>
            <button className='hover:bg-gray-100 p-3 rounded-lg'>Design</button>
            <button className='hover:bg-gray-100 p-3 rounded-lg'>Product</button>
            <button className='hover:bg-gray-100 p-3 rounded-lg'>Software Development</button>
            <button className='hover:bg-gray-100 p-3 rounded-lg'>Customer Services</button>
        </div>
        <div className='md:hidden border-2 w-full px-4 py-3 rounded-lg mt-16'>
            View All
        </div>
        <div className='flex flex-wrap gap-8 md:gap-4 lg:gap-12 justify-between lg:justify-between mt-8 px-0 md:px-0'>
         {articles  &&  articles?.map(article=>   <ArticleCard 
         key={article?.articledetail.id} 
         articleDetails = {article?.articledetail}
         articleWidth='w-full md:w-[48%]'/>)}
          {/* <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/> */}
        </div>
        <div className='w-full border-b-2 mt-12'></div>
        <div className='flex justify-between items-center mt-4'>
            <button className='flex gap-2 p-2 items-center border-2 rounded-lg'>
                <span><BsArrowLeft/></span>
                <span className='hidden md:block'>Previous</span>
            </button>
            <div className='hidden md:flex gap-2 items-center'>
                <span className='btn btn-ghost py-1 rounded-lg'>1</span>
                <span className='btn btn-ghost py-1 rounded-lg'>2</span>
                <span className='btn btn-ghost py-1 rounded-lg'>3</span>
                <span className='btn btn-ghost py-1 rounded-lg'>...</span>
                <span className='btn btn-ghost py-1 rounded-lg'>8</span>
                <span className='btn btn-ghost py-1 rounded-lg'>9</span>
                <span className='btn btn-ghost py-1 rounded-lg'>10</span>
            </div>
            <div className='md:hidden'>
                Page 1 of 10
            </div>
            <button className='flex gap-2 items-center border-2 rounded-lg p-2'>
                <span className='hidden md:block'>Next</span>
                <span><BsArrowRight/></span>
            </button>
        </div>

        <div>
            <h1 className='text-[36px]  mt-36 pl-2 font-medium'>Featured Post</h1>
            <p className='text-[20px] text-gray-500 pl-2 mt-4 mb-12'>
                The latest industry news, interviews, technologies and resources
            </p>
            <div className='flex flex-wrap gap-8 md:gap-4 lg:gap-12 justify-between lg:justify-between mt-8 px-0 md:px-0'>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
            <ArticleCard articleWidth='w-full md:w-[48%]'/>
        </div>
        </div>

        <div className='divider mt-12'></div>
        <div className='flex justify-end'>
            <button className='p-4 py-3 text-white rounded-lg bg-[#7F56D9] text-[16px] font-medium'>View All Posts</button>
        </div>
      </div>
      <div className='bg-[#1D2939] mt-16 w-full h-[400px] text-white flex flex-col justify-center items-center gap-4 pt-12'>
        <div className='flex flex-col items-center gap-4  tracking-wider'>
        <h1 className='text-[30px] w-64 md:w-full text-center md:text-[36px] font-semibold'>Sign up for our newsletter</h1>
        <p className='text-[18px] text-center text-gray-300 md:text-[20px] font-normal px-2 md:px-0'>Be the first one to know abour industry releases and insights</p>
        <div className='flex flex-col md:flex-row w-full items-start gap-3 text-[16px] px-4'>
            <div className='flex flex-col w-full md:w-[360px] gap-2'>
                <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full " />
                <p className='text-[12px] text-gray-300'>We care about your data in our <span>Privacy Policy</span></p>
            </div>
            <button className='text-[16px] bg-[#7F56D9] w-full md:w-[120px] py-3 px-4 rounded-lg'>Subscribe</button>
        </div>
        </div>
      </div>
      <div className='w-full border-2 border-gray-200'></div>
    </div>
  )
}

export default HomeMain
import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ArticleCard = ({articleWidth,articleDetails}) => {

    // const date = new Date(articleDetails?.created_at);

    // console.log(date)
  return (
        <div className={`card bg-base-100 border-2 border-gray-100 ${articleWidth}`}>
            <figure className='relative h-[240px] md:h-[280px]'>
                <img 
                className='h-full w-full'
                src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg" alt="Shoes" />
               <div className='absolute bottom-0 w-full backdrop-blur-lg text-[14px] border-t-[1px] font-medium h-20 text-white'>
                    <h1 className='flex justify-between px-8 pt-4'>
                        <span>{articleDetails?.author_name? articleDetails.author_name:'not found'}</span>
                        <span>Design</span>
                    </h1>
                    <h1 className='px-8'>20 Jan, 2022</h1>
               </div>
            </figure>
            <div className="card-body px-4 md:px-8">
                <h2 className="card-title text-[24px] font-semibold">{articleDetails?.title}</h2>
                <p className='text-[16px] font-normal text-gray-500 mt-2'>{articleDetails?.description}</p>
               <Link to={`/article/${articleDetails?.id}`}>
               <p className='text-[#6941C6] text-[16px] font-medium mt-4 flex items-center gap-3'>
                    <span>Read More</span>
                    <span><FiArrowUpRight className='w-6 h-6'/></span>
                </p>
               </Link>
            </div>
        </div>
  )
}

export default ArticleCard
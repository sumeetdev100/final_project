import React, {useEffect, useState} from 'react'
import {FiCopy} from 'react-icons/fi';
import {BsTwitter,BsFacebook,BsLinkedin} from 'react-icons/bs';
import {SlPaperPlane} from 'react-icons/sl';
import {AiOutlineLink} from "react-icons/ai";
import ArticleCard from '../components/ArticleCard';
import { useParams } from 'react-router-dom';

const ArticleDesc = () => {
    const {id} = useParams();
    const [articleDesc,setArticleDesc] = useState(null);
    

useEffect(()=>{
    fetch(`http://172.25.24.29:3000/article/explicit/${id}`)
    .then(data=>data.json())
    .then(data=>setArticleDesc(data));
},[])

let parser = new DOMParser();
let doc;

if(articleDesc?.body.text)
{
    doc = parser.parseFromString(articleDesc.body.text, 'text/html');
    document.getElementById('content').appendChild(doc.body);
}

  return (
    <div className='w-full px-4 md:px-6 lg:px-16'>
        <div className='h-full pt-12 md:pt-24 md:px-8'>
            <div className='text-[12px] flex justify-start p-1 flex gap-2 text-[#6941C6] bg-gray-200 w-40 rounded-full'>
                <span className='bg-white rounded-full px-2'>Leadership</span>
                <span>8 min read</span>
            </div>
            <h1 className='text-[#101828] text-[36px] md:text-[48px] font-semibold'>{articleDesc?.body.title}</h1>
            <p className='text-[18px] md:text-[20px] text-gray-500 w-full mt-4 md:w-[60%]'>{articleDesc?.body.description}</p>
            <div className='mt-12'>
                <figure className='w-full h-[240px] md:h-[516px]'>
                    <img className='w-full h-full object-cover' alt='bg' src='https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574'/>
                </figure>
                <div className='mt-6 flex flex-col md:flex-row gap-4'>
                    <div className='flex-1 flex gap-16'>
                        <div>
                            <span className='text-[#7F56D9] text-[14px]'>Written By</span>
                            <h2 className='text-[18px] text-gray-900'>{articleDesc?.body.author_name}</h2>
                        </div>
                        <div>
                            <span className='text-[#7F56D9] text-[14px]'>Published On</span>
                            <h2 className='text-[18px] text-gray-900'>17 Jan 2022</h2>
                        </div>
                    </div>
                    <div className='flex gap-4 items-start'>
                        <button className='text-gray-500 p-2 border-2 rounded-lg flex gap-2 items-center text-[14px] font-medium'><span><FiCopy/></span>Copy Link</button>
                        <button className='text-gray-400 p-2 border-2 rounded-lg'><BsTwitter className='h-4 w-4'/></button>
                        <button className='text-gray-400 p-2 border-2 rounded-lg'><BsFacebook/></button>
                        <button className='text-gray-400 p-2 border-2 rounded-lg'><BsLinkedin/></button>
                    </div>
                </div>
            </div>
            <div className='mt-12 flex flex-col md:flex-row justify-between'>
                <div className='w-full md:w-[60%]' id='content'>
             
                </div>
                <div className='mt-10 md:mt-0 bg-[#F9FAFB] h-[438px] border-t-4 border-[#6941C6] w-[343px] md:w-[384px] px-6 pb-4'>
                    <div className='mt-8'>
                        <div className='bg-[#F4EBFF] w-12 h-12 flex justify-center items-center rounded-full'>
                        <SlPaperPlane className='w-6 h-6 text-[#7F56D9]'/>
                        </div>
                    </div>
                    <h1 className='mt-6 text-[24px] font-medium'>Weekly newsletter</h1>
                    <p className='text-[16px] font-normal text-gray-500 font-medium mt-2'>Lorem ipsum dolor, sit amet consectetur adipr modi quis esse quae dolor eos necessitatibus eaque assumenda!</p>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mt-6" />
                    <p className='text-[14px] text-gray-500 mt-1'>Read about our <u>Privacy Policy</u></p>
                    <button className='bg-[#7F56D9] w-full mt-4 text-white text-[16px] font-semibold p-3 rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='divider mt-6 md:px-8'></div>
        <div className='mt-12 md:px-8'>
            <h2 className=' w-full flex justify-between '>
                <span className='text-[#6941C6] text-[16px]'>Our Blog</span>
                <button className='hidden md:block p-4 py-3 text-white rounded-lg bg-[#7F56D9] text-[16px] font-medium'>View All Posts</button>
            </h2>
            <h1 className='text-[36px] font-medium my-4'>Latest Blog Posts</h1>
            <p className='text-[20px] text-gray-500'>Tools and startegies modern teams need to hekp their compnaies grow</p>
            <div className='flex flex-wrap mt-12 justify-between pb-12 gap-8'>
                <ArticleCard articleWidth='w-full md:w-[47%]'/>
                <ArticleCard articleWidth='w-full md:w-[47%]'/>
                <ArticleCard articleWidth='w-full md:w-[47%]'/>
            </div>
        </div>
    </div>
  )
}

export default ArticleDesc
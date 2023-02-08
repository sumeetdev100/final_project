import React,{useEffect, useRef} from 'react'
import {FcGoogle} from 'react-icons/fc';
import {AiFillStar} from 'react-icons/ai';
import {BsArrowLeftCircle,BsArrowRightCircle} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({user,setUser}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user)
        navigate('/')
    },[user,navigate])


    const LoginUser = async ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const response = await fetch('http://172.25.24.29:3000/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email,
                password
              })
        });

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        
        if(data.token){
            setUser(data);
            navigate('/');
        }
    }

  return (
    <div className='flex h-screen'>
        <div className='w-full md:w-[50%] flex justify-center items-center'>
            <div className='w-[330px] md:w-[360px]'>
                <h1 className='text-[30px] font-semibold'>Welcome Back</h1>
                <p className='text-[16px] text-gray-500'>Welcome Back! Please enter your details</p>
                <h1 className='mt-6 mb-2 text-[14px]'>Email</h1>
                <input ref={emailRef} type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                <h1 className='mt-6 mb-2 text-[14px]'>Password</h1>
                <input ref={passwordRef} type="password" placeholder="Type here" className="input input-bordered w-full" />
                <div className='flex justify-between mt-4 items-center'>
                    <span className='flex items-center gap-3'>
                    <input type="checkbox" className='w-4 h-4' />
                    <span className='text-[14px] font-medium'>Remember for 30 days</span>
                    </span>

                    <span className='text-[14px] font-semibold text-[#6941C6]'>Forgot Password</span>
                </div>
                <button
                onClick={LoginUser} className='bg-[#7F56D9] text-[16px] font-semibold text-white w-full p-3 mt-8 rounded-lg'>Sign in</button>
                <button className='w-full rounded-lg text-[16px] font-bold border-2 border-gray-300 mt-4 flex items-center p-2 justify-center gap-3'>
                    <span><FcGoogle className='w-8 h-8'/></span>
                    <span>Sign in with Google</span>
                </button>
                <h1 className='text-[14px] text-gray-500 mt-3 text-center'>
                    <span>Don't have an account? </span>
                    <Link to='/signup'><span className='text-[#6941C6] font-semibold'>Sign up</span></Link>
                </h1>
            </div>
        </div>
        <div className='hidden md:block w-[50%] relative'>
            <figure className='h-full w-full'>
                <img className='h-full w-full object-cover' src='https://image.benq.com/is/image/benqco/monitor-for-programmer-1?$ResponsivePreset$' alt='bg'/>
            </figure>
            <div className='absolute bottom-10 w-full flex justify-center '>
                <div className='w-[90%] backdrop-blur-xl p-4 border-[1px] border-gray-200 px-8'>
                    <h1 className='text-[30px] text-white mt-4'>"We have been using Untitled to kick start every new project and can't imagine working withiut it."</h1>
                    <h1 className='text-white flex items-start justify-between mt-8'>
                        <span className='text-[36px] font-semibold'>Sumeet Debn</span>
                        <span className='flex'>
                            <AiFillStar className='w-6 h-6'/>
                            <AiFillStar className='w-6 h-6'/>
                            <AiFillStar className='w-6 h-6'/>
                            <AiFillStar className='w-6 h-6'/>
                            <AiFillStar className='w-6 h-6'/>
                        </span>
                    </h1>
                    <div>
                        <div className='font-medium mt-4'>
                            <h1 className='text-white text-[18px]'>Founder, Catalog</h1>
                            <h1 className='text-white text-[16px]'>Web Design Agency</h1>
                        </div>
                        <div>
                            <BsArrowLeftCircle/>
                            <BsArrowRightCircle/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LoginPage
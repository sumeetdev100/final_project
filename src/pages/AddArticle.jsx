import React, { useRef } from 'react'
import { useState,useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { useNavigate } from 'react-router-dom';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';


const AddArticle = ({user}) => {
    const [value, onChange] = useState(initialValue);
    const titleRef = useRef();
    const descriptionRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        if(!user)
        navigate('/');
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (user) {
    // setUser(user);
    // }
    // else{
    //     navigate()
    // }
    }, [navigate]);

    const createArticle = async ()=>{
        const response = await fetch('http://172.25.24.29:3000/article/create',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
              },
              body: JSON.stringify({
                title:titleRef.current.value,
                text:value,
                description:descriptionRef.current.value,
                category_id:[3,7],
                user_id: user.id,
              })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    }

    console.log(value);
    return (
        <div className='flex justify-center flex-col px-8 py-12 pt-32'>
            <h1 className='text-center font-semibold text-2xl w-full'>Add Article</h1>
            <div className='w-full'>
            <h1>Title</h1>
            <input ref={titleRef} type="text" placeholder="Enter Title" className="mt-4 input input-bordered w-[343px] md:w-96" />
            <h1 className='mt-8'>Description</h1>
            <input ref={descriptionRef} type="text" placeholder="Enter Description" className="mt-4 input input-bordered w-[343px] md:w-96" />
            </div>
            <div>
            <RichTextEditor value={value} onChange={onChange} id="rte" className=' mt-12'/>
            </div>
            <button onClick={createArticle}>Add</button>
        </div>
    );
}

export default AddArticle
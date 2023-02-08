import React from 'react'
import { Link } from 'react-router-dom'
import BrandIcon from '../svgs/BrandIcon'
import BurgerIcon from '../svgs/Burger'

const Navbar = ({user,setUser}) => {

  const logout = ()=>{
    setUser(null);
    localStorage.removeItem('user');
  }

  return (<>
  <div className="navbar z-10 fixed bg-base-100 border-b-2 px-2 md:px-12 h-[72px] md:h-[80px]">
  <div className="flex-1">
    <span className="btn btn-ghost normal-case text-md md:text-xl flex items-center">
        <span><BrandIcon/></span>
        <span className='pl-4'>Untitled UI</span>
    </span>
    <div className='hidden md:flex gap-2 md:gap-4 ml-2 md:ml-6 text-sm md:text-[16px] text-[#475467]'>
        <span><Link to='/'>Home</Link></span>
        <span>Articles</span>
    </div>
  </div>

{
  !user ?  <div className='hidden md:flex gap-3'>
  <Link to='/login'><button className='btn btn-ghost'>Login</button></Link>
  <Link to='/signup'> <button className='btn bg-[#7F56D9] py-2'>Sign Up</button></Link>
</div> : <div>
 <div className='flex items-center gap-3 mr-4'>
 <figure className='w-8 h-8 rounded-full bg-red-400'>
    <img className='h-full w-full ' src='https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png'/>
  </figure>
  <h1>{user?.name}</h1>
 <Link to='/add_article'> <button className='btn'>
    Add Article
  </button></Link>
 </div>
 <button onClick={logout} className='btn bg-[#7F56D9] py-2'>Logout</button>
</div>
}

 <div className='block md:hidden px-4'>
  <BurgerIcon/>
 </div>
</div>
  </>

  )
}

export default Navbar
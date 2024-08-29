import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/Funiro logo.png'
import user from './Images/Vector (4).png'
import cart from './Images/ant-design_shopping-cart-outlined.png'
import search from './Images/akar-icons_search.png'
import heart from './Images/akar-icons_heart.png'

const Navbar = () => {
  return (
    <>
        <div className='bg-[#FFF] w-full'>
           <div className='max-w-[1440px] mx-auto h-[100px] flex justify-between md:justify-around xl:justify-between lg:justify-around items-center xl:px-3 '>
               <div className='md:w-[15%] '>
                  <img src={logo} alt="" srcset="" />
               </div>
               <div className='md:flex hidden justify-between  md:justify-around items-center w-[30%]  '>
                <Link className='text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Home</Link>
                <Link to="/shop" className='text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Shop</Link>
                <Link className='text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>About</Link>
                <Link className='text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Contact</Link>
               </div>
               <div className='lg:flex  justify-between items-center w-[15%]  hidden '>
                 <img className='block' src={user} alt="" />
                 <img className='block' src={search} alt="" />
                 <img className='block' src={heart} alt="" />
                 <img className='block' src={cart} alt="" />
               </div>
           </div>
        </div>
    </>
  )
}

export default Navbar
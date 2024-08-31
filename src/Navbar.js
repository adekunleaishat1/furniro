import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/Funiro logo.png'
import user from './Images/Vector (4).png'
import cart from './Images/ant-design_shopping-cart-outlined.png'
import search from './Images/akar-icons_search.png'
import heart from './Images/akar-icons_heart.png'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setnav] = useState(false)
  return (
    <>
        <div className='bg-[#FFF] w-full '>
           <div className='max-w-[1440px] mx-auto h-[100px] flex justify-between md:justify-around xl:justify-between lg:justify-around items-center xl:px-3 '>
               <div className='md:w-[15%] '>
                  <img className='w-[80%]' src={logo} alt="" srcset="" />
               </div>
               <div className='md:flex hidden justify-between  md:justify-around items-center w-[30%]  '>
                <Link to="/" className='text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Home</Link>
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
               <div onClick={()=>setnav(!nav)} className='block md:hidden px-3'>
                {nav ? <IoMdClose size={25} /> : <CiMenuFries size={25} /> }
               </div>
               <div className={nav ? ' w-[70%] h-full bg-[#ffffff] fixed left-0 top-0 z-10 py-10 px-5 shadow-sm ease-in-out duration-300' : 'fixed left-[-100%] ease-in-out duration-200'}>
                  <div className='md:w-[15%] '>
                     <img src={logo} alt="" srcset="" />
                  </div>
                  <div className='pt-24'>
                  <Link to="/" className=' block p-4 text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Home</Link>
                  <Link to="/shop" className='block p-4 text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Shop</Link>
                  <Link className='block p-4 text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>About</Link>
                  <Link className='block p-4 text-[16px] text-[#000000] leading-[24px] font-Poppins font-medium no-underline'>Contact</Link>

                  </div>
               </div>
           </div>
        </div>
    </>
  )
}

export default Navbar
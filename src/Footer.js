import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#FFF]  py-10 mt-6 px-3 md:px-0 '>
        <div className='max-w-[1133.01px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:px-0 '>
           <div className='col-span-1 px-3'>
            <h1 className='text-[24px] leading-[36px] font-Poppins font-bold text-[#000000] mb-12'>Funiro.</h1>
            <p className='text-[#9F9F9F] text-[16px] leading-[24px] font-Poppins font-normal'>400 University Drive Suite 200 Coral <br /> Gables,<br />
             FL 33134 USA</p>
           </div>
           <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            <ul className='col-span-1'>
                <li className='text-[#9F9F9F] text-[16px] leading-[24px] font-medium font-Poppins mb-12'>Links</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Home</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Shop</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>About</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Contact</li>
            </ul>
            <ul className='col-span-1'>
                <li className='text-[#9F9F9F] text-[16px] leading-[24px] font-medium font-Poppins mb-12'>Help</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Payment Options</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Returns</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Privacy Policies</li>
                <li className='text-[#000000] text-[16px] leading-[24px] font-medium font-Poppins pb-[38px]'>Contact</li>
            </ul>
            <ul className='col-span-1 md:col-span-2 '> 
                <li className='text-[#9F9F9F] text-[16px] leading-[24px] font-medium font-Poppins mb-12'>Newsletter</li>
                <div className='flex gap-3'>
                <li className='text-[#9F9F9F] text-[14px] leading-[21px] font-normal font-Poppins  border-b-2 border-[#000000] '>Enter Your Email Address</li>
                <li className='text-[#000000] text-[14px] leading-[21px] font-medium font-Poppins  border-b-2 border-[#000000]'>SUBSCRIBE</li>
                </div>

            </ul>
           </div>
        </div>
        <div className='border-t-2 border-[#D9D9D9] max-w-[1133.01px] mx-auto px-3 '>
            <h1 className='text-[#000000] text-[16px] leading-[24px] font-normal font-Poppins  mt-12'>2023 furino. All rights reverved</h1>
        </div>
    </div>
  )
}

export default Footer
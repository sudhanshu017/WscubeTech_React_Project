import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const[toggle,settoggle]=useState(false)

   
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[8px]  flex justify-between   mx-auto items-center'>
                <div className='text-2xl font-bold'>
                    WsCube Tech
                </div>

                {/* Bar Togggle Button   */}
                {
                    toggle?
                        <IoMdClose  onClick={()=>{settoggle(!toggle)}} className='text-white cursor-pointer text-xl md:hidden block'/>
                    :
                        <FaBars onClick={()=>{settoggle(!toggle)}}  className='text-white cursor-pointer text-xl md:hidden block'/>

                }



                <ul className=' hidden md:flex gap-10 text-white text-[18px] cursor-pointer'>
                    <li >
                        Home
                    </li>
                    <li >
                        Company
                    </li>
                    <li >
                        Resources
                    </li>
                    <li >
                        About
                    </li>
                    <li >
                        Contact
                    </li>

                </ul>

                {/* Responsive menu bar */}
                <ul className={`  duration-300 md:hidden  text-white  fixed bg-black  top-[80px] w-full h-screen 
                    ${toggle ? 'left-0' : 'left-[-100%]'}`  // Corrected part
                    }>
                    <li className='p-3 cursor-pointer'>
                        Home
                    </li>
                    <li className='p-3 cursor-pointer'>
                        Company
                    </li>
                    <li className='p-3 cursor-pointer'>
                        Resources
                    </li>
                    <li className='p-3 cursor-pointer' >
                        About
                    </li>
                    <li className='p-3 cursor-pointer'>
                        Contact
                    </li>

                </ul>

            </div>
            
        </div>
    );
}

export default Header;

import React from 'react';
// import Typed from 'react-typed';
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className='bg-[#2699fb] w-full  md:py-[150px] py-[100px]'>
            <div className='max-w-[1240px] mx-auto text-center'>
                <div className=' md:text-3xl text-xl font-bold mt-5'>
                    Learn with us
                </div>
                <h2 className='text-white font-bold md:text-6xl text-3xl  mt-5'>Grow with us</h2>
                <h3 className='md:text-6xl text-xl  font-bold text-white mt-5'>
                    Learn 
                    <ReactTyped
                    className='pl-2'
                     strings={[" Web Development","Digital Marketing","Ethical Hacking"]} 
                     typeSpeed={100}
                     loop={true}
                     backSpeed={50}/>
                </h3>
                <button className='bg-black text-white px-5 py-3 mt-7 rounded-e-sm font-bold'>Get Started</button>

            </div>
        </div>
       
    );
}

export default Banner;

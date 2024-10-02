import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full bg-[#2699fb] p-4'>
            <div className='md:flex max-w-[1300px] justify-between mx-auto gap-[80px] mt-10'>
                <div >
                    <h1 className=' text-[25px] md:text-[40px] text-white font-bold p-3'>Want to learn latest I.t Skills?</h1>
                    <h3 className=' text-[15px] md:text-[20px] text-white  p-1'>Sign up to our newsletter and stay up to date.</h3>
                </div>
                <div className='sm:mt-5' >
                    <input type="text" className=' rounded p-3 mx-5 border border-none text-black' placeholder=' Enter your Name' />
                <button className='bg-black text-white px-5 py-3 mt-7 rounded-e-sm font-bold'>Get Started</button>
                <br />

                <p className=' text-[17px] md:text-[16px] text-white mx-5 mt-5'>We care about the protection of your data,Read Our Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;

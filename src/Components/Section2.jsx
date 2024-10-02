import React from 'react';
import laptop from '../assets/laptop.jpg'

const Section2 = () => {
    return (
        
            <div className='max-w-[1240px]   md:grid md:grid-cols-2 mx-auto my-[25px] '>
                <div className=' md:w-[90%]   '>
                    <img src={laptop} alt="" className='inline' />
                </div>
                <div className='  col-span-1 flex flex-col justify-center'>
                    <h1 className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</h1>
                    <p className='text-black mt-2 md:text-justify font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ut ducimus eos consequuntur alias, perspiciatis 
                        numquam, vero,
                         facere natus nisi labore ipsum deleniti. Recusandae molestiae iste doloremque voluptatibus officiis dolorum?
                    </p>
                    <button className='bg-black w-[30%] text-white md:px-5 md:py-3   mt-2 rounded-e-sm font-bold'>Get Started</button>
                </div>

               
            </div>
            
        
    );
}

export default Section2;

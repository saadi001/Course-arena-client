import React from 'react';
import image1 from '../../images/pngwing.com.png'

const Hero = () => {
     return (
          <section className="bg-gray-100 text-gray-800 max-w-[1370px] mx-auto">
               <div className=" container flex flex-col justify-center p-2 mx-auto sm:py-10 lg:py-20 lg:flex-row lg:justify-between">
                    <div className="  flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg  xl:max-w-lg lg:text-left">
                         <h1 className="text-4xl font-bold leading-none sm:text-6xl">Learn from the best at<br /><span className="text-teal-600"> Course Arena</span>
                         </h1>
                         <p className="mt-6 mb-8 text-lg sm:mb-12"> Start or upgrade yourself with 100+ course from the best teachers.
                              <br className="hidden md:inline lg:hidden" /> You will also get degree and certificate for accelerate your journey.
                         </p>
                         
                    </div>
                    <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                         <img src={image1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
               </div>
          </section>
     );
};

export default Hero;
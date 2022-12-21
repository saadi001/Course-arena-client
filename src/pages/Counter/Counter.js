import React from 'react';
import NumberCounter from 'number-counter';

const Counter = () => {
     return (
          <div className=' max-w-[1370px] mx-auto'>
               <div className='container  mx-auto p-6 my-7 grid grid-cols-3 text-center'>
                    <div>
                         <p className='text-[#81b29a] text-2xl font-semibold'>Participant</p>
                         <NumberCounter end={85} delay={1.5} className="increment text-6xl text-teal-600 font-bold"  />
                    </div>
                    <div>
                         <p className='text-[#3d405b] text-2xl font-semibold'>courses</p>
                         <NumberCounter end={6} delay={1.5}  className="increment text-6xl text-[#3d405b] font-bold"  />
                    </div>
                    <div>
                         <p className='text-[#c1121f] text-2xl font-semibold'>Questions</p>
                         <NumberCounter end={60} delay={1.5}  className="increment text-6xl text-[#c1121f] font-bold"  />
                    </div>
                    

               </div>
          </div>
     );
};

export default Counter;
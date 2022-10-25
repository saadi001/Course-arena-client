import React from 'react';
import Courses from './Courses';
import Sidebar from './Sidebar';

const Course = () => {
     return (
          <div className='w-full max-w-[1370px] mx-auto mt-6'>
               <div className='grid grid-cols-3 gap-3 mx-auto sm:mx-10 '>
                    <div className=''><Sidebar></Sidebar></div>
                    <div className='col-span-2'><Courses></Courses></div>
               </div>
          </div>

     );
};

export default Course;
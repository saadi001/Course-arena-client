import React from 'react';

const SingleCourse = ({course}) => {
     const {img,title,details,student,price,rating} = course;
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 border'>
               <div><img className='w-full rounded-md object-cover bg-slate-300 max-h-44' src={img} alt="" /></div>
               <div className='col-span-2'>
                    <p>{title}</p>
               </div>
          </div>
     );
};

export default SingleCourse;
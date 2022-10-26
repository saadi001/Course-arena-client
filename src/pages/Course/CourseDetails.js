import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
     const course = useLoaderData();
     // console.log(course)
     const { img, title, details, student, price, rating, author } = course;
     return (
          <div className='max-w-[1370px] mx-auto p-4 bg-gray-800 text-white'>
               <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3  gap-4'>
                    <div className='col-span-2'>
                         <p className='text-3xl font-serif font-semibold'>{title}</p>
                         <p className='text-slate-300 mt-2'>{details}</p>
                         <p className='text-xl font-semibold text-teal-400 mt-2'>{author.name}</p>
                         <div className='grid grid-cols-2'>
                              <p className='text-sm text-slate-400'>Price: </p>
                              <p className='text-sm text-slate-400'>Ratings: </p>
                              <p className='text-sm font-bold text-slate-300'>${price}</p>
                              <p className='text-sm font-bold text-slate-300'>{rating.number}</p>
                         </div>
                         <p className='text-sm text-slate-400'>Enrolled: {student}</p>
                         <div className='mt-3'>
                         <button className='btn btn-accent mr-2'>Buy Now</button> <button className="btn btn-outline btn-accent">Add to cart</button>
                         </div>
                    </div>
                    <div className=''>
                         <img className='object-cover rounded-md bg-slate-400 min-h-[300px] ' src={img} alt="" />
                    </div>
               </div>

          </div>
     );
};

export default CourseDetails;
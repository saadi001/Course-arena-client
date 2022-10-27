import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
     const {id, img, title, details, student, price, rating, author } = course;
     return (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 mb-4 border rounded-md'>
               <div><img className='w-full rounded-md object-cover md:object-contain lg:object-cover bg-slate-300 h-56' src={img} alt="" /></div>
               <div className='col-span-2'>
                    <p className='text-xl font-bold'>{title}</p>
                    <p className='text-sm'>{details.length > 100 ? details.slice(0, 100) + '...' : details}</p>
                    <p className='text-xs text-slate-500 mt-1'>Enrolled: {student}</p>
                    <p className='text-sm font-bold'>{author.name}</p>
                    <div className='grid grid-cols-2'>
                         <p className='text-sm text-slate-500'>Price: </p>
                         <p className='text-sm text-slate-500'>Ratings: </p>
                         <p className='text-sm font-bold'>${price}</p>
                         <p className='text-sm font-bold'>{rating.number}</p>
                    </div>
                    <button className='my-1 font-serif bg-teal-500 hover:bg-teal-600 text-slate-700 hover:text-slate-800 py-[6px] px-2 rounded'><Link to={`/courses/${id}`}>See full details</Link></button>
               </div>
          </div>
     );
};

export default SingleCourse;
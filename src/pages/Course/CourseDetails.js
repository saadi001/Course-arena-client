import React, { useRef } from 'react';
import ReactPrint from 'react-to-print';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
     const course = useLoaderData();
     const ref = useRef()

     const {id, img, title, details, student, price, rating, author } = course;
     return (
          <div className='max-w-[1370px] mx-auto p-4 bg-gray-800 text-white'>
               <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 relative'>
                    <div className='col-span-2 mt-5'>
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
                         <Link to={`/checkout/${id}`}><button className='btn btn-accent mr-2'>Get premium access</button></Link>
                         </div>
                    </div>
                    <div className='mt-9'>
                         <img className='object-cover rounded-md bg-slate-400 min-h-[300px] ' src={img} alt="" />
                    </div>
                    <button className='absolute right-0 top-0 bg-slate-500 px-2 rounded'>print</button>
                    <div className='print hidden'>
                         <div className='sss overflow-y-scroll'>
                              <div ref={ref} className='a m-4 p-4'>
                                   <img className='h-[400px]' src={img} alt="" /><br />
                                   <h3 className='text-3xl mb-3'>{title}</h3>
                                   <p>{details}</p>
                              </div>
                         </div>
                    </div>
                    <ReactPrint trigger={()=><button className='absolute right-0 top-0 bg-slate-500 px-2 rounded'>save</button>} content={()=>ref.current}/>
               </div>

          </div>
     );
};

export default CourseDetails;
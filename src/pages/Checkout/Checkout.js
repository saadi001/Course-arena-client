import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';

const Checkout = () => {
     const {user} = useContext(AuthContext);
     const course = useLoaderData();     
     const { img, title, price, rating, author } = course;

     return (
          <div className='max-w-1370 mx-auto mt-3'>
               <div className='grid  grid-cols-1 sm:grid-cols-3 gap-2 w-11/12 md:w-10/12 mx-auto'>
                    <div className='col-span-2 grid grid-cols-1 md:grid-cols-3 space-x-2'>
                         <div className=''>
                              <img className='w-full' src={img} alt="" />
                         </div>
                         <div className=' col-span-2'>
                              <p className='text-2xl font-semibold mb-2'>{title}</p>                              
                              <p className='font-semibold'>Author: {author.name}</p>
                              <p className='text-slate-500 text-sm'>Ratings: {rating.number}</p>
                              <p className='text-slate-700 text-sm mt-3'>Published: {author.published_date}</p>
                         </div>
                    </div>
                    <div className='mt-5 md:mt-0'>
                         <p className='text-2xl font-semibold mb-3'>Payment Info:</p>
                         <div>
                              <p className='text-sm text-slate-500 mb-2'>payment method:</p>
                              <input type="radio" id="creditcard"
                                   name="contact" value="creditcard"/>
                                   <label className='font-semibold ml-2' for="creditcard">credit card</label><br />

                                   <input type="radio" id="paypal"
                                        name="contact" value="paypal" />
                                   <label className='font-semibold ml-2' for="paypal">paypal</label>
                         </div>
                         <div>
                              <p className='mt-3 text-sm text-slate-500'>Name: <br /> <span className='text-slate-800 text-base font-semibold'>{user?.displayName}</span></p>
                         </div>
                         <div className='mt-3'>
                              <p className='text-slate-500 text-sm'>price:</p>
                              <p className='font-semibold'>${price}</p>
                         </div>
                         <div>
                              <p className='mt-2 text-sm text-slate-500'>card number:</p>
                              <input className='border border-slate-400 rounded-sm px-1 py-[2px] w-10/12' type="password" name="cardnumber" id="" />
                         </div>
                         <div>
                              <button className='bg-teal-500 my-4 px-3 py-2 rounded'>Check Out</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Checkout;
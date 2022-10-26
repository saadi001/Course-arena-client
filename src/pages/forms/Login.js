import React from 'react';
import { Link } from 'react-router-dom';
import googlePng from '../../images/google.png';
import githubPng from '../../images/github.png';



const Login = () => {
     return (
          <div>
               <form className="w-full max-w-md mx-auto border p-4 mt-5 rounded shadow-md">
                    <h2 className='text-3xl text-center font-semibold'>Login</h2>

                    <div>
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input type="email" name="email" className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" required />
                    </div>
                    <div>
                         <label className="label">
                              <span className="label-text">password</span>
                         </label>
                         <input type="password" name="password" className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" required />
                    </div>
                    <p className='py-1 text-sm text-slate-600 '>New here? <Link className='underline' 
                    to='/register'>create acount</Link></p>
                    <div className='flex justify-between mt-3 '>
                         <div><button type='submit' className='py-2 px-3 rounded bg-teal-500'>Login</button></div>
                         <div className='flex'>
                              <div className='border rounded-md p-1 mr-3 cursor-pointer hover:bg-slate-200'><img className='w-9 h-7 ' src={googlePng} alt="" /></div>
                              <div className='border p-1 rounded-md cursor-pointer hover:bg-slate-200'><img className='w-9 h-7' src={githubPng} alt="" /></div>
                         </div>
                    </div>

               </form>
          </div>
     );
};

export default Login;
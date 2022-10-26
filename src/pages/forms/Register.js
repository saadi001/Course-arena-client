import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googlePng from '../../images/google.png';
import githubPng from '../../images/github.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';

const Register = () => {
     const [error, setError] = useState('');
     const navigate = useNavigate();

     const {createUser,updateUserProfile} = useContext(AuthContext);

     const handleForm = (e) =>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const photoURL = form.url.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(photoURL);

          createUser(email, password)
          .then(res =>{
               const user = res.user;
               console.log(user);
               form.reset();
               setError('');
               handleUpdateProfile(name, photoURL);
               navigate('/')


          })
          .catch(e=>{
               console.error(e);
               setError(e.message)
          })
          
     }

     const handleUpdateProfile = (name, photoURL) =>{
          const profile = {
               displayName: name,
               photoURL: photoURL
          }
          updateUserProfile(profile)
          .then(() =>{})
          .catch(e => console.error(e))
     }
     
     return (
          <div className=''>
               <form onSubmit={handleForm} className="w-full max-w-md mx-auto border p-4 mt-5 rounded shadow-md">
                    <h2 className='text-3xl text-center font-semibold'>Register</h2>
                    <div>
                         <label className="label">
                              <span className="label-text">Full name</span>
                         </label>
                         <input type="text" name="name" className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Full name" required />
                    </div>
                    <div>
                         <label className="label">
                              <span className="label-text">Photo URL</span>
                         </label>
                         <input type="text" name="url" className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="photoURL" required />
                    </div>
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
                    {<p className='text-red-600 text-xs py-1'>{error}</p>}
                    <p className='py-1 text-sm text-slate-600 '>Aleady have account? <Link className='underline' to='/login'>login</Link></p>                  
                    <div className='flex justify-between mt-3 '>
                         <div><button type='submit' className='py-2 px-3 rounded bg-teal-500'>Register</button></div>
                         <div className='flex'>
                              <div  className='border rounded-md p-1 mr-3 cursor-pointer hover:bg-slate-200'><img className='w-9 h-7 ' src={googlePng} alt="" /></div>
                              <div className='border p-1 rounded-md cursor-pointer hover:bg-slate-200'><img className='w-9 h-7' src={githubPng} alt="" /></div>
                         </div>
                    </div>
               </form>

          </div>
     );
};

export default Register;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/Authprovider';
import image from '../images/logo.png'


const Main = () => {
     const { user, logOut } = useContext(AuthContext);

     const userLogout = () => {
          logOut();

     }

     return (
          <div className="drawer">
               <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-300">
                         <div className="flex-none md:hidden">
                              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                              </label>
                         </div>
                         <div className="flex-1 px-2 mx-2 cursor-pointer">
                              <img className='h-7 mr-2' src={image} alt="" />
                              <Link to='/' className='text-xl font-mono'>Course-Arena</Link>
                         </div>
                         <div className="flex-none hidden md:block">
                              <ul className="menu menu-horizontal flex items-center">
                                   <li><label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer bg-gray-700 text-gray-100">
                                        <input id="Toggle4" type="checkbox" className="hidden peer" />
                                        <span className="px-2 py-1 bg-gray-400 peer-checked:bg-gray-700 text-xs">Light</span>
                                        <span className="px-2 py-1 bg-gray-700 peer-checked:bg-teal-600 text-xs">Dark</span>
                                   </label></li>
                                   <li><Link to='/course'>courses</Link></li>
                                   <li><Link to='/faq'>FAQ</Link></li>
                                   <li><Link to='/blog'>blog</Link></li>
                                   {
                                        user?.uid ?
                                             <div className='flex items-center'>
                                                  <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                                                       <img className=' h-7 mr-2 rounded-[50%]' src={user.photoURL} alt="" />
                                                  </div>
                                                  <button onClick={userLogout} className='bg-teal-500 rounded px-2 py-1 mx-2'>sign out</button>
                                             </div> :
                                             <><li><Link to='/login'>login</Link></li>
                                                  <li><Link to='/register'>register</Link></li>
                                             </>
                                   }

                              </ul>
                         </div>

                    </div>

                    <Outlet></Outlet>
                    {/* <Footer></Footer> */}
               </div>
               <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                         <li><Link to='/course'>courses</Link></li>
                         <li><Link to='/faq'>FAQ</Link></li>
                         <li><Link to='/blog'>blog</Link></li>
                         {
                              user?.uid ?
                                   <span className='flex flex-col ml-2'><img className='h-7 w-7 mr-2 rounded-[50%]' src={user.photoURL} alt="" />
                                        <button onClick={userLogout} className='bg-teal-500 rounded p-1 mt-2 w-1/2'>sign out</button></span> :
                                   <><li><Link to='/login'>login</Link></li>
                                        <li><Link to='/register'>register</Link></li>
                                   </>
                         }
                         <div>
                         <li className='w-2/5 ml-2'><label for="Toggle" className="inline-flex items-center p-1 cursor-pointer bg-gray-700 text-gray-100">
                                        <input id="Toggle" type="checkbox" className="hidden peer" />
                                        <span className="px-2 py-1 bg-gray-400 peer-checked:bg-gray-700 text-xs">DAY</span>
                                        <span className="px-2 py-1 bg-gray-700 peer-checked:bg-teal-600 text-xs">NIGHT</span>
                                   </label></li>
                         </div>
                         
                    </ul>
                    

               </div>
          </div>
     );
};

export default Main;
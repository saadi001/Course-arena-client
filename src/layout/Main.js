import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Footer from '../pages/footer/Footer';
import image from '../images/logo.png'


const Main = () => {
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
                              <Link to='/' className='text-xl font-mono'>Course-Arena</Link></div>
                         <div className="flex-none hidden md:block">
                              <ul className="menu menu-horizontal">
                                   
                                   <li><Link to='/course'>courses</Link></li>
                                   <li><Link to='/faq'>FAQ</Link></li>
                                   <li><Link to='/blog'>blog</Link></li>
                                   <li><Link to='/login'>login</Link></li>
                                   <li><Link to='/register'>register</Link></li>
                                   
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
                                   <li><Link to='/login'>login</Link></li>
                                   <li><Link to='/register'>register</Link></li>
                    </ul>

               </div>
          </div>
     );
};

export default Main;
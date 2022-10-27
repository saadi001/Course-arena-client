import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
     const [category, setCategory] = useState([]);

     useEffect(()=>{
          fetch('https://course-arena-sever.vercel.app/categories')
          .then(res => res.json())
          .then(data => setCategory(data))
     },[])
     return (
          <div className='font-serif lg:pl-5 pl-1 rounded '>
               <h2 className='text-4xl'> Courses: </h2>
               <div className='flex flex-wrap sm:flex-col'>
               {
                    category.map(c => <p className=' rounded cursor-pointer px-2 py-1 text-xl mb-3 hover:bg-slate-200'
                         key={c.id}>
                              <Link to={`/courses/${c.id}`}><div>{c.name}</div></Link>
                         </p>)
               }
               </div>
          </div>
     );
};

export default Sidebar;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from './SingleCourse';

const Courses = () => {
     const [course, setCourse] = useState([]);

     useEffect(()=>{
          fetch('https://course-arena-sever.vercel.app/courses')
          .then(res => res.json())
          .then(data => setCourse(data))
     },[])
     return (
          <div>
               {
                    course.map(c => <SingleCourse key={c.id} course={c}></SingleCourse>)
               }
          </div>
     );
};

export default Courses;
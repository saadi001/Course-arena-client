import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Courses = () => {
     const [course, setCourse] = useState([]);

     useEffect(()=>{
          fetch('')
     },[])
     return (
          <div>
               I am the courses
          </div>
     );
};

export default Courses;
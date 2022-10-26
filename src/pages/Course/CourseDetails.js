import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
     const course = useLoaderData();
     // console.log(course)
     const {id, img, title, details, student, price, rating, author } = course;
     return (
          <div>
               
          </div>
     );
};

export default CourseDetails;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
     const course = useLoaderData();
     console.log(course)
     return (
          <div>
               this is checkout page
          </div>
     );
};

export default Checkout;
import React from 'react';

const Blog = () => {
     return (
          <div className='max-w-[1366px] mx-auto mt-8 mb-10'>
          <div className='w-5/6 mx-auto'>          
               <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                    <h3 className='text-lg font-bold'>Question 1: what is cors?</h3>
                    <p className='mb-2'><span className='font-bold'>Answer:</span> </p>
                    <p className='mb-2'>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                    
               </div>
               <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                    <h3 className='text-lg font-bold'>Question 2:  Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='mb-2'><span className='font-bold'>Answer:</span> </p>
                    <p className='mb-2'>It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.</p>
                    <p className='mb-2'>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
               </div>
               <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                    <h3 className='text-lg font-bold'>Question 3: How does the private route work?</h3>
                    <p><span className='font-bold'>Answer:</span></p>
                    <p className='mb-2'>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
               </div>
               <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                    <h3 className='text-lg font-bold'>Question 4:  What is Node? How does Node work?</h3>
                    <p><span className='font-bold'>Answer:</span></p>
                    <p className='mb-2'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                    <p className='mb-2'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
               </div>

          </div>
     </div>
     );
};

export default Blog;
import React from 'react';

const Faq = () => {
     return (
          <div className='max-w-[1370px] mx-auto'>
               <div className='w-10/12 md:w-8/12 mx-auto '>
                    <div tabIndex={0} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                         <div className="collapse-title text-xl font-medium">
                              Are we trusted?
                         </div>
                         <div className="collapse-content">
                              <p>Yes. 100% you can trust us. If you have any doubt then please our student review on review page. You can also see teachers info to make sure that we are trusted.</p>
                         </div>
                    </div>
                    <div tabIndex={1} className="my-2  collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                         <div className="collapse-title text-xl font-medium">
                              How can i pay you?
                         </div>
                         <div className="collapse-content">
                              <p>You can pay us with credit card and paypal. For more info please check our checkout page.</p>
                         </div>
                    </div>
                    <div tabIndex={2} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                         <div className="collapse-title text-xl font-medium">
                              Will you give certificate?
                         </div>
                         <div className="collapse-content">
                              <p>Yes! we provide certificate</p>
                         </div>
                    </div>
                    <div tabIndex={2} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                         <div className="collapse-title text-xl font-medium">
                              Is this paid course?
                         </div>
                         <div className="collapse-content">
                              <p>Yes! This is paid course</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Faq;
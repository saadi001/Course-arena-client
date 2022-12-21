import React from 'react';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

const Home = () => {
     return (
          <div>
               <Hero></Hero>
               <Counter></Counter>
               <Footer></Footer>
          </div>
     );
};

export default Home;
import React from 'react';

import Navbar from '../../Layouts/Navbar/Navbar';
import Banner from './Banner';
import Faq from './Faq';
import Footer from '../../Layouts/Footer';
import Features from './Features';

const Home = () => {
  return (
    <div >
    <Navbar></Navbar>
         <div className='mt-10'>
         <Banner></Banner>
          </div> 
          <div>
            <Features/>
          </div>
          <div   className="border-4 bg-purple-50 mb-5 
           border-gray-600 shadow-2xl">
           
            <Faq></Faq>
          </div>
          <div>
            <Footer></Footer>
          </div>
    </div>
  );
};

export default Home;
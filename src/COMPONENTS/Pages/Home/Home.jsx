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
         <div className=''>
         <Banner></Banner>
          </div> 
          <div>
          <div className="text-center mb-5 border-b-4 border-dotted  border-green-950 mt-10">
  <h1 className="text-5xl font-extrabold text-purple-600"> OUR Features</h1>
</div>
            <Features/>
          </div>
          <div   className="border-4 bg-purple-50 mb-5 mt-32
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
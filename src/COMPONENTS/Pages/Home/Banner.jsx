import React from 'react';
import video from '../../../assets/da547d1838f8ba9490528c11f7492c5c.mp4';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='relative h-[80vh]'>
      <video autoPlay muted playsInline style={{ objectFit: 'cover', width: '100%', height: '80%' }}>
        <source src={video} type="video/mp4" />
        {/* Add other video formats if needed (webm, ogg, etc.) */}
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="bg-black w-full bg-opacity-30 p-8 rounded-md">
        
  <div>
     <h1 className='lg:text-5xl  text-3xl font-extrabold text-purple-900'>AssignmentAllies</h1>
  </div>

         

          <div>
          <p className='text-2xl text-purple-200'>Unlocking Success Through Friends and Knowledge</p>
          </div>
         <Link to='/'> <button onClick='/' className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark">play</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

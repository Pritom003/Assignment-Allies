import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import MyassignmentCaed from './MyassignmentCaed';

const Myassignment = () => {
 
  // console.log(loadeddata.length);

  return (
    <div>
      <Navbar />



      {/* {loadeddata?.length > 0 ? (
        loadeddata.map((item, index) => (
          <MyassignmentCaed item={item} key={index} />
        ))
      ) : (
        <p>No data available.</p>
      )} */}
    </div>
  );
};

export default Myassignment;

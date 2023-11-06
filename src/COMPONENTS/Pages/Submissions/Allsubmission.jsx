import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Allsubmissioncard from './Allsubmissioncard';

const Allsubmission = () => {
  const loadeddata = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      {
  loadeddata?.map((item, index) => 
  <Allsubmissioncard  key={index} item={item}/>)
}
      Allsubmission
    </div>
  );
};

export default Allsubmission;
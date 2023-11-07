import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Allsubmissioncard from './Allsubmissioncard';
import { AuthContext } from '../../Providers/AuthiProvider';
import axios from 'axios';

const Allsubmission = () => {
  // const {user}=useContext(AuthContext)
  const loadeddata = useLoaderData();
  // const [ loadeddata ,setloadeddata ]=useState([])
  // const url = `http://localhost:5000/mysub?email=${user?.email}`;
  // useEffect(() => {

  //   axios.get(url, {withCredentials: true})
  //   .then(res => {
  //       setloadeddata(res.data);
  //   })
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBookings(data))
// }, [url]);

  return (
    <div>
      <Navbar></Navbar>
     <div className='grid grid-cols-2 md:grid-cols-3 justify-center align-middle 
     items-center gap-4 '>
     {
  loadeddata?.map((item, index) => 
  <Allsubmissioncard  key={index} item={item}/>)
}
     </div>
      Allsubmission
    </div>
  );
};

export default Allsubmission;
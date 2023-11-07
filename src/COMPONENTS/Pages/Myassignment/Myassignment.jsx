import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import MyassignmentCaed from './MyassignmentCaed';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthiProvider';
// import { error } from 'pdf-lib';

const Myassignment = () => {
//  const loadeddata=useLoaderData()
const {user}=useContext(AuthContext)
  
  const[loadeddata,setloaded]=useState([])
 
  useEffect(()=>{
  axios.get(`http://localhost:5000/mysub/user/${user?.email}`,{withCredentials:true})
  .then((res)=>{
      setloaded(res.data)
      
    })
    .catch(err=>{console.log(err);})
    
},[user.email])

  

  return (
    <div>
      <Navbar />



      {loadeddata?.length > 0 ? (
        loadeddata.map((item, index) => (
          <MyassignmentCaed item={item} key={index} />
        ))
      ) : (
        <p>No data available.</p>
      )} < p className='text-center'> your assignment result</p>
    </div>
  );
};

export default Myassignment;

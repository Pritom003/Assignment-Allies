import React, { useContext, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthiProvider';


const Privaterout = ({children}) => {

  
  const {user,loading}=useContext(AuthContext)
  const location =useLocation()
  // console.log(location)
  if(loading){
    return <h1><span className="loading loading-spinner loading-lg"></span></h1>

  }
  if(user){
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privaterout;
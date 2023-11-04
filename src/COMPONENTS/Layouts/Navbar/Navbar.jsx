import React from 'react';
import logo from '../../../assets/icons8-assignment-64.png'
import { NavLink } from 'react-router-dom';
                 
const Navbar = () => {


  const link=<>
  <li> <NavLink to='/'>Home</NavLink></li>
  {/* <li> <NavLink to={`/cart/user/${user?user.email :loading}`}>MY Cart</NavLink></li> */}
  {/* <li> <NavLink to='/carts'>MY Cart</NavLink></li>  */}

  <li> <NavLink to='/login'>login</NavLink></li>
  <li> <NavLink to='/add'> create assignment</NavLink></li>
  {/* <li> <NavLink to='/update'> update product</NavLink></li> */}
  
  </>













  return (
    <div className="navbar  " style={{ background: 'linear-gradient(to right, #6C63FF, #B9ACFF)' }}
    >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm 
      dropdown-content mt-3 z-[1] p-2 shadow  bg-[#B9ACFF]
      rounded-2xl w-44">
       {link}
      </ul>
    </div>
   <div className='flex  justify-center align-middle items-center'>

  
   <p className="font-bold text-xl">AssignmentAllies</p>
   <img
   
   className='h-[20px]'
   src={logo}
    alt="" />
  
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"></a>
  </div>
</div>
   
  );
};

export default Navbar;
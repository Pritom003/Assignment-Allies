import React, { useContext } from 'react';
import logo from '../../../assets/icons8-assignment-64.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthiProvider';
                 
const Navbar = () => {
  const {user ,logout}=useContext(AuthContext)
console.log(user);


const handlesignout=()=>{
  logout()
  .then(res=>{
    console.log('logged out',res)

  })
  .catch(err=>{
    console.log('error logged out',err)
  })
}




  const link=<>
  <li> <NavLink to='/'>Home</NavLink></li>
  {/* <li> <NavLink to={`/cart/user/${user?user.email :loading}`}>MY Cart</NavLink></li> */}
  {/* <li> <NavLink to='/carts'>MY Cart</NavLink></li>  */}

  <li> <NavLink to='/login'>login</NavLink></li>
  <li> <NavLink to='/add'> create assignment</NavLink></li>
  <li> <NavLink to='/allass'> Assignments</NavLink></li>
  <li> <NavLink to='/allsubm'> Allsubmission</NavLink></li>
  <li> <NavLink to='/myassign'> mysubmission</NavLink></li>
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

  <div className="navbar-end ">
  {
    user ?
    
    <div className=" mt-6">
    <div className="tooltip" data-tip={user.displayName}>
    <div className="avatar p-4">
  <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
</div>

    
  </div>
    </div> 
    
    
//     <div className='flex  justify-center  align-middle items-center gap-2'>
//     
// <div className='text-purple-600 flex-none gap-2 text-center mr-4'>
// </div> </div>



:''
   }
    
   {
    user ? <button onClick={handlesignout} className=' font-bold md:mr-2 text-purple-300'>
      
   <p>Logout</p>
       
      </button>: <Link to='/login'><button
     className='text-xl  font-bold mr-2 text-purple-950'>login</button></Link>
   }
  </div>



 


  
  {/* */}
</div>
   
  );
};

export default Navbar;
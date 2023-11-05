import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthiProvider';
import Swal from 'sweetalert2';

const Details = () => {
  const loaderdata=useLoaderData()
  // const {user}=useContext(AuthContext)



  const {name,number,type,email,dueDate,description,photo}=loaderdata
  console.log(loaderdata.type);








  return (
    <div>
      <Navbar></Navbar>
      <div className=' mt-10'>

      <div className="relative flex max-w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden grid align-middle items-center
  justify-center 
   text-gray-700 bg-transparent rounded-none 
   shadow-none bg-clip-border">
    <img
      src={photo}
      alt="ui/ux review check"
    />
    <figcaption>owner:{email}</figcaption>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}

    </h4>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
     {description}
    </p>
    <div className='grid grid-cols-2 align-middle  items-center justify-center '>
      <p> Assignment Difficulty type:{type} </p>
      <p> Assignment Difficulty type:{type} </p>
      <p> due date:{dueDate} </p>
      <p> totalmarks:{number} </p>
    </div>
  </div>
  <div className='flex justify-between align-middle items-center m-10'>
   <div className='flex gap-2 '>
   {/* <button onClick={()=>{}} ><a href="/editassignment">Edit</a></button> */}
    <button>update assignment </button>
   </div>
    <button>take assignment</button>
  </div>
  
</div>
      </div>
    </div>
  );
};

export default Details;
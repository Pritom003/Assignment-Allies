import React, { useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import axios from 'axios';
// import success from '../../../assets/Animation - 1699191876738.json'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AddAssignment = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const type = form.type.value
    const dueDate = form.dueDate.value;
    const description = form.description.value;
    const mydata = {
      name,
      number,
      type,
    email,
      dueDate,
      description,
      photo,
    };

    if (!name || !number || !email || !description) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required!',
      });
      return;
    }

    if (number <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Mark must be a positive number!',
      });
      return;
    }

   axios.post('https://assignment-allies-server-site.vercel.app/assignments',mydata)
   .then(res=>{
    console.log(res.data);
   
    if (res.data.insertedId) {
      // console.log(data)
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'New assignmen added to the assignment page',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  
   })
   .catch(err=>{console.log(err.message);})

    console.log(mydata);
  }
  return (
  <div className=' bg-gradient-to-r shadow-2xl from-purple-300 to-pink-100'>
      <Navbar></Navbar>
    <div className='grid justify-center items-center '>
    <div>
      <h2 className='text-2xl font-bold text-center m-4 text-purple-800'>
        Add assignment
      </h2>
    </div>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">Thumbnail</label>
        <input
          type="photo"
          name="photo"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">Assignment Name</label>
        <input
          type="text"
          name="name"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">mark</label>
        <input
          type="number"
          name="number"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">Difficulty level</label>
        <select
          name="type"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        
        </select>
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">date</label>
        <input
          type="date"
          name="dueDate"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">User Email</label>
        <input
          type="email"
          name="email"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring
           focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
 
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700"> Assignment Description</label>
        <textarea
          name="description"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        ></textarea>
      </div>
      <div className="col-span-2 flex justify-center">
        <button
          className="btn mb-10 btn-primary py-2 px-10"
          style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}
        >
          submit
        </button>
      </div>
    </form>
  </div>
  </div>
  );
};

export default AddAssignment;

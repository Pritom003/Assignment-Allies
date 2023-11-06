import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import encourage from '../../../assets/Animation - 1699231659481.json'
import success from '../../../assets/Animation - 1699191876738.json'
import Lottie from 'lottie-react';
import axios from 'axios';
import Swal from 'sweetalert2';
const Takeassignment = () => {
  const handlesubmission=e=>{
    e.preventDefault()
    const form = e.target;
    const file = form.file.value;
    const description = form.description.value;
    const name = form.name.value;
    const email = form.email.value;
    const mydata={file,description,name,email}
    console.log(mydata);
    axios.post('http://localhost:5000/mysub',mydata)
    .then(res=>{
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
          console.log('congo');
        }

    })

  }
  return (
<div className='bg-purple-50'>
<Navbar></Navbar>
<div> <h1 className='text-3xl text-center mb-8 mt-10 font-extrabold underline'> Submit your assignments :</h1></div>
<div className='grid grid-cols-1 md:grid-cols-2 bg-purple-50 align-middle items-center justify-center '>
 
<form onSubmit={handlesubmission} className='p-4'>
        <div>
          <label className="label">
            <span className="text-3xl text-purple-950">Assignment pdf</span>
          </label>
          <input type="file" 
      name='file'
      className="file-input file-input-bordered file-input-secondary w-full " />
        </div>
        <div className="mb-4 sm:mb-0">
        <label className="text-3xl text-purple-950"> Assignment short  Description</label>
        <textarea
          name="description"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        ></textarea>
      </div>
      <div className='flex gap-2 justify-center align-middle items-center'>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-950">YOUR Email:</label>
        <input required
          type="email"
          name="email"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring
           focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-950">YOUR Name:</label>
        <input
          type="name"
          name="name"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring
           focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      </div>
       
         <div className='flex align-middle items-center justify-center  p-4'> <button className="btn  text-black bg-pink-300">submit</button></div>
      
      </form>
      <div>
      <Lottie animationData={encourage}></Lottie>
      </div>

</div>

</div>
      
    

      
     
    
     
   




    
  );
};

export default Takeassignment;
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar/Navbar';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthiProvider';

const Markassignment = () => {
  const data=useLoaderData()
  const{file,description,examinee ,examineeemail,_id,
    type,author,totalmark,assignmentname,link}=data

const {user}=useContext(AuthContext)
    const handleupdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const type = form.type.value;
const description = form.description.value;
const number = form.number.value;
      
      
      const mydata = {
      
       type,description,number
      };
      console.log(mydata);
      
if(author===user.email){
  
  axios.put(`https://assignment-allies-server-site.vercel.app/mysub/${_id}`,mydata)
  .then(res=>{console.log(res.data)
   if (res.data.modifiedCount > 0) {
     Swal.fire({
         title: 'Success!',
         text: 'mark successfully submitted',
         icon: 'success',
         confirmButtonText: 'Cool'
     })
   }
 
 })
 .catch(err=>{console.log(err.message);})

}else{
  console.log("Author is not the same as the user.");
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}



};
  






  
  console.log(data);
  return (
    <div>
      <Navbar></Navbar>
    
        {/* assignment preview here  */}
 
  {/* {---------------------------------------------------------------------------} */}
  <div className="card w-[80vw] p-32 bg-base-100 shadow-xl mx-auto">
  <div className="card-body">
    <h2 className="card-title">Examinee: {examinee}</h2>
    <h2 className="card-title">Author: {author}</h2>
    <Link to={link} className='text-blue-500 underline'> Click here to see the pdf</Link>
    <p>assignment name:{assignmentname}</p>
    <div>

    <div>
     <form onSubmit={handleupdate}>
     
     <div>
     <select
     name="type"
     className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
   >
     <option value="completed">completed</option>
    
   
   </select>
     </div>
     <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">mark number out oF {totalmark}</label>
        <input
          type="number"
          name="number"
          defaultValue={totalmark}
          max={totalmark}
          min='0'
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="text-3xl text-purple-950"> Assignment feedback</label>
        <textarea
          name="description"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        ></textarea>
      </div>     
      <button className="btn btn-primary">submit</button>
     </form>
     
  
      </div>

    </div>
   
  </div>
</div>




  {/* <div className="card-body">
    <h2 className="card-title"></h2>
    <h2 className="card-title">}</h2>
    <p></p>
   
    <div className="card-actions justify-end">

      <div>
     <form onSubmit={handleupdate}>
     
     <div>
     <select
     name="type"
     className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
   >
     <option value="completed">completed</option>
    
   
   </select>
     </div>
     <div className="mb-4 sm:mb-0">
        <label className="block text-sm font-medium text-purple-700">mark number out oF {totalmark}</label>
        <input
          type="number"
          name="number"
          defaultValue={totalmark}
          max={totalmark}
          min='0'
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        />
      </div>
      <div className="mb-4 sm:mb-0">
        <label className="text-3xl text-purple-950"> Assignment feedback</label>
        <textarea
          name="description"
          className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none w-full"
        ></textarea>
      </div>     
      <button className="btn btn-primary">submit</button>
     </form>
     
  
      </div>
     
    </div>
  </div> */}
{/* </div> */}
    </div>
  );
};

export default Markassignment;
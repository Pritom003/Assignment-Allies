import React, { useContext } from 'react';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom'; // Change useNavigation to useNavigate
import Navbar from '../../Layouts/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthiProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Details = () => {
  const loaderdata = useLoaderData();
  const {user}=useContext(AuthContext)
  const navigate = useNavigate(); // Change to useNavigate

  const { name, number, type, email, dueDate, description, photo, _id } = loaderdata;
  console.log(loaderdata.type);

  const handleDelete = (_id) => {
    if(user.email===email){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5000/assignments/${_id}`)
            .then((res) => {
              if (res?.data?.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your assignment has been deleted.',
                  'success'
                );
                navigate('/allass'); // Use navigate instead of navigation
                // Optionally, you can add logic to remove the deleted assignment from the UI
              } else {
                Swal.fire(
                  'Error',
                  'Failed to delete the assignment.',
                  'error'
                );
              }
            })
            .catch((error) => {
              console.error('Error:', error);
              Swal.fire(
                'Error',
                'An error occurred while deleting the assignment.',
                'error'
              );
            });
        }
      })
    }else{  Swal.fire(
      'Error',
      'Sorry only the author has the permission to delete the document.',
      'error'
    );
    }
   
  };
const handlepermission=()=>{
 
    Swal.fire(
      'Error',
      'Sorry only the author has the permission to modify the document.',
      'error'
    );
  

}
  return (
    <div>
      <Navbar></Navbar>
      <div className=''>
        <div className="relative flex max-w-full flex-col rounded-xl
          bg-gradient-to-r from-purple-100 to-indigo-200 text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden grid align-middle
           items-center justify-center text-gray-700 bg-transparent
            rounded-none shadow-none bg-clip-border">
            <img src={photo} alt="ui/ux review check" />
            <figcaption>owner: {email}</figcaption>
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {description}
            </p>
            <div className='grid grid-cols-2 align-middle items-center justify-center'>
              <p> Assignment Difficulty type: {type} </p>
              <p> Assignment Difficulty type: {type} </p>
              <p> due date: {dueDate} </p>
              <p> total marks: {number} </p>
            </div>
          </div>
          <div className='flex justify-between align-middle items-center m-10'>
            <div className='flex gap-2 '>
             {
              user?.email===email ? <Link to={`/update/${_id}`}> <button  className="btn btn-primary"
               >update assignment </button></Link>:
                <button  className="btn btn-primary" onClick={()=>handlepermission(_id)}>update assignment </button>
             }
              <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
            </div>
            <Link to={`/take/${_id}`}><button className="btn btn-primary">take assignment</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AssignmentsCard = ({ assignment }) => {
  const { name, number, type, email, dueDate, description, _id, photo } = assignment;

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/assignments/${_id}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your assignment has been deleted.',
                'success'
              );
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
    });
  };

  return (
    <div className='m-5'>
      <div className="hero h-[700px] lg:h-[400px] bg-purple-50 border-4 border-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt="Assignment" />
          <div>
            <h1 className="text-5xl font-bold">Assignment Name: {name}</h1>
            <p className="py-6">Total Marks: {number}</p>
            <p className="py-6">Due Date: {dueDate}</p>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;

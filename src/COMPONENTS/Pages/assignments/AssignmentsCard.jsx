import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AssignmentsCard = ({ assignment }) => {
  const { name, number, type, email, dueDate, description,
    _id, photo } = assignment;

 

  return (
    <div className='m-5'>
      <div className="hero h-[700px] lg:h-[400px] bg-purple-50 border-4 border-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="max-w-sm h-[300px] rounded-lg shadow-2xl" alt="Assignment" />
          <div>
            <h1 className="text-5xl font-bold">Assignment Name: {name}</h1>
            <p className="py-6">Total Marks: {number}</p>
            <p className="py-6">Due Date: {dueDate}</p>
            <p className="py-6">type :{type}</p>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { Link, useLoaderData } from 'react-router-dom';


const Allsubmission = () => {
  const loadeddata = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-center align-middle items-center gap-4">
        {loadeddata
          .filter((item) => item.type === 'pending')
          .map((item, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Examinee name: {item.examinee}</h2>
                <p>Examinee email: {item.examineeemail}</p>
                <p>Assignment type: {item.type}</p>
                <p>Assignment name: {item.assignmentname}</p>
                <div className="card-actions justify-end">
                  <Link to={`/markass/${item._id}`}>
                    <button className="btn btn-primary">Give Mark</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allsubmission;

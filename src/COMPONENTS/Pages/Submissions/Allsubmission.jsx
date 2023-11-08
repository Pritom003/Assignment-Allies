import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pdfpreview from './pdfpreview';








const Allsubmission = () => {
  const loadeddata = useLoaderData();










  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center align-middle items-center gap-2">
        {loadeddata
          .filter((item) => item.type === 'pending')
          .map((item, index) => (
            <div key={index}  className="card card-side bg-base-100 shadow-xl">


{/* modal-------------------------------------------------------------------- */}


  <figure>
<label htmlFor="my_modal_6" className="btn">seepreview</label>
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <Pdfpreview item={item.link}></Pdfpreview>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div></figure>





{/* ----------------------------------------------------------------------- */}

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
  )
}

export default Allsubmission;



            


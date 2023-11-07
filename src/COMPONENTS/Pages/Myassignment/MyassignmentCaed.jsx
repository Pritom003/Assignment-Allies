import { identityMatrix } from 'pdf-lib/cjs/types/matrix';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthiProvider';
import ace from '../../../assets/Animation - 1699366919307.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const MyassignmentCaed = ({item}) => {
  const {user}=useContext(AuthContext)
  const  { _id, examinee, examineeemail, type, author,
    description, totalmark, assignmentname }=item
 
  return (
    <div>
      {
        type==='completed' &&  user?.email === (examineeemail) ? <div className='flex justify-center align-middle items-center'>



<div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello {examinee}</h1>
      <h1 className="text-5xl font-bold">Your score: {totalmark}</h1>
      <p className="py-6">examiner feedback {description}</p>
     <Link to='/'> <button  className="btn btn-primary">Goodluck</button></Link>
    </div>
  </div>
</div>
<Lottie animationData={ace}></Lottie>












        </div>: <></>
      }
      {/* {number}
      {type} */}
    </div>
  );
};

export default MyassignmentCaed;
import React from 'react';
import lotieanim from '../../assets/Animation - 1699123755231.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div> 
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
     
      <Lottie animationData={lotieanim}></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-[#097969]">Signup </button>
        </div>
        <div><p>
          Already have an account? <Link className='text-green-950
          font-bold' to='/login'>login</Link>
          
          </p></div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Signup;
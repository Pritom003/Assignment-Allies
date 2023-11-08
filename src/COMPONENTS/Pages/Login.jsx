// import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Layouts/Navbar/Navbar';
import { AuthContext } from '../Providers/AuthiProvider';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
// import lotieanim from '../../assets/Animation - 1699123755231.json'
const Login = () => {
  const location=useLocation()
  console.log(location);
  const navigate=useNavigate()
  const { loginuser,creategooglesignup } = useContext(AuthContext);
  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const info = { email, password };
    loginuser(email, password)
    .then((res) => {
      console.log(res.user);
      const user={email}
      console.log(user);
     navigate(location?.state? location.state :'/')
    // https://assignment-allies-server-site.vercel.app
    // https://assignment-allies-server-site.vercel.app
    // axios.post('https://assignment-allies-server-site.vercel.app/jwt', user, { withCredentials: true })
    // .then(res => {
    //     console.log(res.data)
    //     if (res.data.success) {
    //         navigate(location?.state ? location?.state : '/')
    //     }
    // })
  })
    .catch((error) => {
      console.error(error);
    })}
    const handlegooglepop = () => {
      creategooglesignup()
        .then((res) => {
          console.log('user', res.user);
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            text: 'Email and password do not match, please try again!',
          })})
    };
  return (
    <div>
      <Navbar></Navbar>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-[#097969] font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body mb-8">
 
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-[#097969]">Login</button>
        </div>
        <div><p>
          New here? <Link className='text-green-950
          font-bold' to='/regi'>SignUP</Link>
          
          </p></div>
      </form>
      <button
            onClick={handlegooglepop}
            className="flex shadow-2xl items-center justify-center  py-12 md:py-24 px-2 md:px-10 border-purple-200 border-4 align-middle md:gap-2 text-sm md:text-xl font-bold"
          >
            Sign in with Google
            <div className='text-3xl'><FcGoogle></FcGoogle></div>
          </button>
    </div>
  </div>
</div>




    
    </div>
  );
};

export default Login;
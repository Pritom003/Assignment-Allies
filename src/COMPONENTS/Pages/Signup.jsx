
import lotieanim from '../../assets/Animation - 1699123755231.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import Navbar from '../Layouts/Navbar/Navbar';
import { AuthContext } from '../Providers/AuthiProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
const Signup = () => {
  const { createUser, creategooglesignup } = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passerr, setpasserr] = useState(''); // Fix the state variable name here
  // const [registererror, setregierror] = useState('');

  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^.{6,}$/.test(password)) {
      setpasserr('Password should be more than 6 characters');
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/.test(password)) {
      setpasserr('Password should contain at least one capital letter and one special character');
    } else {
      setpasserr('');
      setpassword(password);
      setemail(email);

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          updateProfile(res.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          })
            .then((nameimg) => {
              console.log('success image', nameimg);
            })
            .catch((err) => {
              console.error(err, 'error img');
            });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your registration was successful!',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something went wrong',
            footer: '<a href=""> try again</a>',
          });
        });
    }
  };

  return (
    <div> 
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
     
      <Lottie animationData={lotieanim}></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="photo" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
        </div>
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
          <div>
                {passerr && <p className="text-red-600">{passerr}</p>}
              </div>
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
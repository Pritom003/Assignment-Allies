import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import encourage from '../../../assets/Animation - 1699231659481.json'
import Lottie from 'lottie-react';
const Takeassignment = () => {
  const handlesubmission=e=>{
    e.preventDefault()
  }
  return (
<div className='bg-purple-50'>
<Navbar></Navbar>
<div> <h1 className='text-3xl text-center mb-8 mt-10 font-extrabold underline'> Submit your assignments :</h1></div>
<div className='grid bg-purple-50 align-middle items-center justify-center '>
 
<form>
        <div>
          <label className="label">
            <span className="text-3xl text-purple-950">Assignment pdf</span>
          </label>
          <input type="file" 
      name='file'
      className="file-input file-input-bordered file-input-secondary w-full " />
        </div>
       
         <div className='flex align-middle items-center justify-center  p-4'> <button className="btn  text-black bg-pink-300">submit</button></div>
      
      </form>
      <div>
      <Lottie animationData={encourage}></Lottie>
      </div>

</div>

</div>
      
    

      
     
    
     
   




    
  );
};

export default Takeassignment;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Features = () => {

  const [data,setdata]=useState([])
  useEffect(()=>{
  axios.get('http://localhost:5000/features')
  .then(res=>{
    console.log(res.data);
    setdata(res.data)
  })
  },[])
  return (
    <div className='m-10  lg:flex  md:grid md:grid-cols-2 grid justify-center align-middle gap-2'>
   
      {
        data?.map((items,index)=><div key={index}>

<div className="card md:w-[200px] w-[300px] h-[300px] bg-base-100 mb-5 shadow-xl image-full">
  <figure><img src={items.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{items.facilityname}</h2>
    <p>{items.description}</p>
   
  </div>
</div>
        </div>)
      }
    </div>
  );
};

export default Features;
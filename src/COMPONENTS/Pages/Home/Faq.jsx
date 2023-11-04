import React from 'react';

const Faq = () => {
  return (

<div className='grid justify-center align-middle items-center p-4'>
<div className="text-center mb-5 border-b-4 border-dotted  border-green-950 mt-10">
  <h1 className="text-5xl font-extrabold text-purple-600">FAQ</h1>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 justify-center align-bottom items-center'>
  

  <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >

<img  className='h-[300px]' src="https://i.ibb.co/grJxQBX/faaq.jpg
    " alt="" />
</div>

    
  <div>
    {/* faq */}

    <div>
    <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
    </div>
   
  </div>
</div>
</div>
  );
};

export default Faq;
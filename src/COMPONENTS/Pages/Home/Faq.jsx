import React from 'react';

const Faq = () => {
  return (

<div className='grid justify-center align-middle items-center p-4'>
  <div className="text-center mb-5 border-b-4 border-dotted  border-green-950 mt-10">
    <h1 className="text-5xl font-extrabold text-purple-600">Questions and Answers</h1>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 justify-center align-bottom items-center'>
    <div data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" >
      <img className='h-[300px]' src="https://i.ibb.co/grJxQBX/faaq.jpg" alt="" />
    </div>
    <div>
      {/* Questions and Answers */}
      <div>
        <div className="collapse bg-base-200">
          <input type="radio" name="qa-accordion" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
            What is our website about?
          </div>
          <div className="collapse-content"> 
            <p>Our website is a platform for online group study where users can collaborate, share assignments, and engage in study-related activities.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="qa-accordion" /> 
          <div className="collapse-title text-xl font-medium">
            How can I give and receive assignments?
          </div>
          <div className="collapse-content"> 
            <p>To give and receive assignments, navigate to the Assignment section on our website and follow the provided instructions.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="qa-accordion" /> 
          <div className="collapse-title text-xl font-medium">
            Are there any study-related resources available?
          </div>
          <div className="collapse-content"> 
            <p>Yes, we provide study-related resources and tools to help you with your studies. Explore the Features section for more information.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Faq;
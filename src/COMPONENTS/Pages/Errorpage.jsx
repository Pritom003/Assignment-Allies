import React from 'react';
import erroranim from '../../assets/Animation - 1699125697179.json'
import Lottie from 'lottie-react';
const Errorpage = () => {
  return (
    <div>
      <Lottie animationData={erroranim}></Lottie>
    </div>
  );
};

export default Errorpage;
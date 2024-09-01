
import React from 'react';
import '../styles.css';
import { useNavigate } from '@tanstack/react-router';




const About: React.FC = () => {

    let navigate = useNavigate();
    function goToHome(){
        navigate({to: "/"})
    }

  return (
    <div className='about-container'>
      <h1>This is a React Project built with Tanstack Router</h1>
      <button onClick={goToHome}>Return to Home page</button>
    </div>
  );
};

export default About;

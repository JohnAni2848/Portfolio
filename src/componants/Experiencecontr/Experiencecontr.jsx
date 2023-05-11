import React from 'react'
import { Element } from 'react-scroll';
import Experience from '../Experience/Experience';
import "./Experiencecontr.css"

const Experiencecontr = () => {
  return (
    <Element className='experiencecontr' id='exp'>
      <h1>Experience</h1>
      <p>I have Work on different projects and media using the latest software to develop innovative graphic designs that meet the company’s business goals. Work independently and collaborate with the marketing team as and when required. 
Schedule projects based on priority to balance the workload, which might include three or more simultaneous projects</p>
      <div className='experiencecontr_info'>
        <Experience number='+10' title='clients' id="expr" />
      </div>
    </Element>
  );
};

export default Experiencecontr

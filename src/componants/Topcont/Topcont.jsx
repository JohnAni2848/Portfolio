import React from 'react'
import { Link } from 'react-scroll';
import "./Topcont.css";

const Topcont = () => {
  return (
    <div className="topcont">
      <div className="topcont_contr">
        <p>Welcome To My World</p>
        <h1><span>Mr.</span> Stalin Sesuraj</h1>
        <p>Professional Frontend Developer</p>
        <a href="file:///C:/Users/sstal/OneDrive/Documents/Stalin%20resume.pdf">
          <button className="topcont_but1">Download CV</button>
         
        </a>
      </div>
    </div>
  )
}

export default Topcont

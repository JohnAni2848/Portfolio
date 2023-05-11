import React from 'react'
import { Element } from 'react-scroll'
import './Contactcontr.css'


const Contactcontr = () => {
  return (
  <Element className='contact' id='contact'>
    <h1>Contact</h1>
    <div className='Contact_contr'>
        <p>
            Email: <span>stalinsesuraj03@gmail.com</span>
        </p>
        <p>
            Phone: <span>9361708481</span>
        </p>
        <p>
            Whatsapp: <span>8531972848</span>
        </p>
  </div>

  </Element>
  );
};

export default Contactcontr

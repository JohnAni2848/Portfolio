import React from 'react'
import './Experience.css'

const Experience = ({ number, title, style, }) => {
    return (
        <div style={{ ...style }} className='experience'>
            <h1>Graphical Design -3 years</h1> <br />
            <h1>Frontend developer -1 years</h1>
            
        </div>
    );
};
export default Experience

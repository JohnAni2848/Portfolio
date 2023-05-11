import React from 'react';
import { Element } from 'react-scroll';
import skillimg from "../../Assts/skill.jpg";
import LinearProgress from '@mui/material/LinearProgress';
import './Skillcontr.css';

const Skillcontr = () => {
    return (
        <Element className='skillcontr' id='skills'>
            <div className='skillcontr_image'>
                <img src={skillimg} alt="" />
            </div>

            <div className="skillcontr_text">
                <h2>Skillset</h2>
                <div className='skillcontr_Skillset'>
                    <h4>React</h4>
                    <div className='skillcontr_slider skillcontr_slider1'>
                        <LinearProgress variant="determinate" value={80} />

                    </div>
                </div>
                <div className='skillcontr_Skillset'>
                    <h4>Typescript</h4>
                    <div className='skillcontr_slider skillcontr_slider2'>
                        <LinearProgress variant="determinate" value={70} />

                    </div>
                </div>
                <div className='skillcontr_Skillset'>
                    <h4>Javascript</h4>
                    <div className='skillcontr_slider skillcontr_slider2'>
                        <LinearProgress variant="determinate" value={75} />

                    </div>
                </div>
                <div className='skillcontr_Skillset'>
                    <h4>HTML5/CSS3</h4>
                    <div className='skillcontr_slider skillcontr_slider3'>
                        <LinearProgress variant="determinate" value={90} />

                    </div>
                </div>
                <div className='skillcontr_Skillset'>
                    <h4>Bootstrap</h4>
                    <div className='skillcontr_slider skillcontr_slider4'>
                        <LinearProgress variant="determinate" value={90} />

                    </div>
                </div>
                <div className='skillcontr_Skillset'>
                    <h4>Illustration/Photoshop</h4>
                    <div className='skillcontr_slider skillcontr_slider5'>
                        <LinearProgress variant="determinate" value={95} />

                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Skillcontr

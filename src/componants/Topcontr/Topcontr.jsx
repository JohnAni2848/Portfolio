import React from 'react'
import { Element } from "react-scroll";
import Topcont from "../Topcont/Topcont";
import "./Topcontr.css";

const Topcontr = () => {
  return (
    <div>
        <Element name="About" className="topcontr">
            <Topcont />
        </Element>
      
    </div>
  )
}

export default Topcontr;


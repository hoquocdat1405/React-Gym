import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import { motion } from "framer-motion";
const Reason = () => {
  return (
    <div id="reason">
      <div className="reason-left">
        <motion.img
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:0.6}}
        src={image1} alt="" />
        <motion.img
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:0.5}}
        src={image2} alt="" />
        <motion.img
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:0.6}}
        src={image3} alt="" />
        <motion.img
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:0.5}}
        src={image4} alt="" />
      </div>
      <motion.div 
      initial={{x:200}}
      whileInView={{x:0}}
      transition={{duration:0.5}}
      className="reason-right">
        <span>Some Reasons</span>
        <p>
          <span className="stroke-text">Why</span> <span>choose us?</span>
        </p>
        <div>
          <img src={tick} alt="" />
          <span>over 140+ expert coachs</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>train smarter and faster than before</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>1 free program for new member</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>reliable partners</span>
        </div>
        <p className="partner-text">OUR PARTNERS</p>
        <div className="logo-row">
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
          <img src={nb} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Reason;

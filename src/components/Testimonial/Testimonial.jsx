import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import arrowLeft from "../../assets/leftArrow.png";
import arrowRight from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [select, setSelect] = useState(0);
  const dataLength = testimonialsData.length; 
  return (
    <div id="testimonial">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="testimonial-left"
      >
        <span className="testimonial-text">Testimonials</span>
        <p className="testimonial-logan">
          <span className="stroke-text">What they</span>
          <span>say about us</span>
        </p>
        <span className="testimonial-info">
          {testimonialsData[select].review}
        </span>
        <div className="testimonial-author">
          <span className="testimonial-author-name">
            {testimonialsData[select].name}
          </span>
          <span className="testimonial-author-position">
            - {testimonialsData[select].status}
          </span>
        </div>

        <div className="testimonial-logan-row">
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div className="testimonial-logan-row">
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </motion.div>
      <div className="testimonial-right">
        <div className="testimonial-right-box-container">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="testimonial-box-1"
          ></motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="testimonial-box-2"
          ></motion.div>
          <img
            className="testimonial-img"
            src={testimonialsData[select].image}
            alt=""
          />
          <div className="arrow-row">
            <img src={arrowLeft} alt="" onClick={()=>{select===0?setSelect(dataLength-1):setSelect(select-1)}}/>
            <img src={arrowRight} alt="" onClick={()=>{select===dataLength-1?setSelect(0):setSelect(select+1)}}/>
          </div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="testimonial-email"
          >
            <input
              type="text"
              className="email-input"
              placeholder="Enter your email address"
            />
            <button className="email-button">Join now</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

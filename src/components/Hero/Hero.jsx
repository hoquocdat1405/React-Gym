import React, { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Hearth from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import HeroImgBack from "../../assets/hero_image_back.png";
import CaloChart from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  
  return (
    <div className="hero">
      <div className="hero-left">
        <Header />

        {/* hero-ad */}
        <div className="hero-ad">
          <motion.div
          initial={{left:200}}
          whileInView={{left:8}}
          transition={{duration:2}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero-title */}
        <div className="hero-title">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <span>ideal body</span>
          <span className="hero-sub-title">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        {/* hero figures */}

        <div className="hero-figure">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-button">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-right">
        <button>Join Now</button>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="hero-hearth-rate"
        >
          <img src={Hearth} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={HeroImg} alt="" className="hero-img" />
        <motion.img
          initial={{ x: 0 }}
          whileInView={{ x: -120 }}
          transition={{ duration: 0.8 }}
          src={HeroImgBack}
          alt=""
          className="hero-img_back"
        />

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="calory-box"
        >
          <img src={CaloChart} alt="" className="calory-chart" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

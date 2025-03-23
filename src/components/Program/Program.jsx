import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import programsImage from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <div>
      <div className="program">
        <div className="program-title">
          <span className="stroke-text">Explore our</span>
          <span>Programs</span>
          <span className="stroke-text">To shape you</span>
        </div>

        <div className="program-list">
          {programsData.map((program,index) => (
            <div key={index} className="program-list-box">
              {program.image}
              <p>{program.heading}</p>
              <p>{program.details}</p>
              <div>
                <span>Join now</span>
                <img src={programsImage} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;

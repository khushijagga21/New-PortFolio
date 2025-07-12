import React from "react";
import "./Hackathon.css";


const Hackathons = () => {
  return (
    <div className="hackathons-page">
      <div className="hackathons-container">
        <h1 className="hackathons-title">Hackathons & Competitions</h1>
        <p className="hackathons-subtitle">
          I love solving real-world problems and collaborating with talented people!
        </p>
        <div className="hackathons-list">
          <div className="hackathon-item">
            <h2>10+ Hackathons</h2>
            <p>Participated in national & international hackathons</p>
          </div>
          <div className="hackathon-item">
            <h2>5+ Coding Competitions</h2>
            <p>Showcased coding and problem-solving skills</p>
          </div>
          <div className="hackathon-item">
            <h2>2 Wins</h2>
            <p>Won XYZ Hackathon 2024 & ABC Ideathon 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;

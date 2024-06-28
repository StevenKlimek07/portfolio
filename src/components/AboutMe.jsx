import React from "react";
import "./AboutMe.css";
import ProfilePicture from "/Users/stevenklimek/bloom-repos/react-projects/portfolio-projet/src/images/profile-picture.jpeg";

function AboutMe() {
  return (
    <div className="aboutsteve">
      <div className="aboutheader">
        <h1>About Steve</h1>
        <></> {/*supposed to be imported image element from video here */}
      </div>
      <div className="about-sections">
        <div className="about-left-side">
          <img
            className="profileimage"
            src={ProfilePicture}
            alt="Steven Profile"
          />
        </div>
        <div className="about-right-side">
          <div className="tech-skills">
            <h2>Technical Skills:</h2>
            <h3>Front End:</h3>
            <p>Skilled in Javascript & React.js (Experience in HTML and CSS)</p>

            <h3>Back End:</h3>
            <p>*information will be added once experience is obtained*</p>

            <h3>Other:</h3>
            <p>Algorithms, Single Page Applications, Teamwork</p>
          </div>
          <div className="class-projects">
            <div className="project-section">
              <h2>Projects:</h2>
              <div className="project-section">
                <button className="aboutme-submit-button">
                  <a href="#">Calculator App</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;


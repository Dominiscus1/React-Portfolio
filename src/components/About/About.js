import React from "react";
import aboutImg from "../../images/Profile_Picture.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="col2">
          <h1 className="about_heading maroon">About Page</h1>
          <div className="about_body">
            <p className="about_text maroon">
              A Computer Science graduate trying to learn as much as possible
            </p>
          </div>
        </div>
        <div className="col2">
          <img src={aboutImg} alt="" className="about_img"></img>
        </div>
      </div>
    </div>
  );
}

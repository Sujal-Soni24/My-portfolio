import React from "react";
import "./Resume.css";
import resumePDF from "../assets/Sujal_Soni_Resume_photo.pdf";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>You can download my resume below:</p>
      <a href={resumePDF} download className="btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;

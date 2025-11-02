import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <img src={profile} alt="Sujal Soni" className="profile-img" />
      <div className="about-content">
        <h2>SUJAL SONI</h2>
        <p>
          A passionate Full Stack Web Developer in training with a strong
          foundation in front-end technologies like HTML, CSS, and JavaScript. <br/>
          I
          love transforming creative ideas into functional, user-friendly web
          applications. So far, I’ve built exciting projects like Visabolt, a
          responsive website created with HTML, CSS, and JS, and a Weather App
          powered by live API data. <br/>
          Currently, I’m expanding my skills in React,
          Node.js, and MySQL to become a complete full stack developer. My
          goal is to build modern, scalable, and efficient web solutions that
          make an impact. <br/>
          I enjoy learning new tools, solving real-world
          problems through code, and continuously improving my craft.
        </p>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:sujalsoni5499@gmail.com">sujalsoni5499@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/sujal-soni"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/sujal-soni
        </a>
      </p>
      <p>Location: Mumbai, India</p>
    </section>
  );
}

export default Contact;

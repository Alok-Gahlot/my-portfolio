import React from "react";
import "./styles.css";
import { FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="container">
      <a
        className="logo"
        target="_blank"
        href="https://github.com/alokgahlot"
      >
        <FaGithub />
      </a>

      <a
        className="logo"
        target="_blank"
        href="https://www.linkedin.com/in/alok-gahlot-245183b5"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="logo"
        target="_blank"
        
        href="mailto:alokgahlot99@gmail.com"
      >
        <FaGoogle />
      </a>
    </div>
  );
}

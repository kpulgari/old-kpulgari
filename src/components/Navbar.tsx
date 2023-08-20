import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar text">
      <button className="navbar-button home">Home</button>
      <button className="navbar-button projects">Projects</button>
      <button className="navbar-button resume">
        <a
          className="resume"
          href="https://drive.google.com/file/d/1T2FqbVuec1xLLJLyaATLAftHeVjSbPcd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
      <button className="navbar-button darkmode">Darkmode</button>
    </div>
  );
};

import React, { ReactNode } from "react";
import "../styles/Navbar.css";

interface Props {
  currentPage: string;
  darkmodeIcon: ReactNode;
}

export const Navbar = ({ currentPage, darkmodeIcon }: Props) => {
  return (
    <div className="navbar text">
      <button
        className={`navbar-button home ${
          currentPage === "home" ? "active" : ""
        }`}
      >
        Home
      </button>
      <button
        className={`navbar-button projects ${
          currentPage === "projects" ? "active" : ""
        }`}
      >
        Projects
      </button>
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
      <button className="navbar-button darkmode"> {darkmodeIcon} </button>
    </div>
  );
};

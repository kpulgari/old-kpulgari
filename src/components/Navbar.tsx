import React, { ReactNode } from "react";
import "../styles/Navbar.css";

interface Props {
  currentPage: string;
  darkmodeIcon: ReactNode;
  onPageChange: (page: string) => void;
  onDarkModeClick: () => void;
}

export const Navbar = ({
  currentPage,
  darkmodeIcon,
  onPageChange,
  onDarkModeClick,
}: Props) => {
  function onResumeButtonClick(): void {
    window.open(
      "https://drive.google.com/file/d/1T2FqbVuec1xLLJLyaATLAftHeVjSbPcd/view?usp=sharing"
    );
  }

  return (
    <div className={`navbar text`}>
      <button
        className={`navbar-button home ${
          currentPage === "home" ? "active" : ""
        }`}
        onClick={() => onPageChange("home")}
      >
        Home
      </button>
      <button
        className={`navbar-button projects ${
          currentPage === "projects" ? "active" : ""
        }`}
        onClick={() => onPageChange("projects")}
      >
        Projects
      </button>
      <button className="navbar-button resume" onClick={onResumeButtonClick}>
        Resume
      </button>
      <button className="navbar-button darkmode" onClick={onDarkModeClick}>
        {darkmodeIcon}
      </button>
    </div>
  );
};

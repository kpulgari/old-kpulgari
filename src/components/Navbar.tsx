import { ReactNode } from "react";
import { Link } from "react-router-dom"; // Import Link component
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
      "https://drive.google.com/file/d/1ZeqJbomMyVlbZLOCUbJ15WJ4GfstfyHG/view?usp=sharing"
    );
  }

  return (
    <div className={`navbar text`}>
      <Link
        to="/"
        className={`navbar-button home ${
          currentPage === "home" ? "active" : ""
        }`}
        onClick={() => onPageChange("home")}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`navbar-button about ${
          currentPage === "about" ? "active" : ""
        }`}
        onClick={() => onPageChange("about")}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`navbar-button projects ${
          currentPage === "projects" ? "active" : ""
        }`}
        onClick={() => onPageChange("projects")}
      >
        Projects
      </Link>
      <button className="navbar-button resume" onClick={onResumeButtonClick}>
        Resume <span className="resume-arrow ">↗</span>
      </button>
      <button className="navbar-button darkmode" onClick={onDarkModeClick}>
        {darkmodeIcon}
      </button>
    </div>
  );
};

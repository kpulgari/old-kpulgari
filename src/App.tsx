import { ReactEventHandler, useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const colorSelections = ["", "color-one", "color-two", "color-three"];
  const [blobColorIndex, setBlobColorIndex] = useState(
    Math.floor(Math.random() * colorSelections.length)
  );
  const [blobColor, setBlobColor] = useState(colorSelections[blobColorIndex]);

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkModeEnabled, setDarkModeEnabled] = useState(prefersDarkMode);

  useEffect(() => {
    const updateDarkMode = (e: MediaQueryListEvent) => {
      setDarkModeEnabled(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", updateDarkMode);

    return () => {
      darkModeMediaQuery.removeEventListener("change", updateDarkMode);
    };
  }, []);

  const iconStyles = {
    color: darkModeEnabled ? "#FFFFFF" : "#000000",
    fontSize: "var(--icon-size)",
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleDarkModeChange = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleHeaderClick = () => {
    const nextIndex = (blobColorIndex + 1) % colorSelections.length;

    setBlobColorIndex(nextIndex);
    setBlobColor(colorSelections[nextIndex]);
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home onHeaderClick={handleHeaderClick} blobColor={blobColor} />;
    } else if (currentPage === "projects") {
      return <Projects />;
    }
  };

  return (
    <div className={`root ${darkModeEnabled ? "dark-mode" : ""}`}>
      <Navbar
        currentPage={currentPage}
        darkmodeIcon={
          <FontAwesomeIcon
            icon={darkModeEnabled ? faSun : faMoon}
            style={iconStyles}
          />
        }
        onPageChange={handlePageChange}
        onDarkModeClick={handleDarkModeChange}
      ></Navbar>
      <Footer
        githubLogo={<FontAwesomeIcon icon={faGithub} style={iconStyles} />}
        linkedInLogo={
          <FontAwesomeIcon icon={faLinkedinIn} style={iconStyles} />
        }
        mailLogo={<FontAwesomeIcon icon={faEnvelope} style={iconStyles} />}
      ></Footer>
      {renderPage()}
    </div>
  );
}

export default App;

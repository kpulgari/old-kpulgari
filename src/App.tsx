import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "projects") {
      return <></>;
    }
  };

  return (
    <div className="root">
      <Navbar
        currentPage={currentPage}
        darkmodeIcon={
          <FontAwesomeIcon
            icon={darkModeEnabled ? faSun : faMoon}
            style={{ color: "#000000" }}
          />
        }
        onPageChange={handlePageChange}
      ></Navbar>
      {renderPage()}
      <Footer
        githubLogo={
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#000000", fontSize: "var(--icon-size)" }}
          />
        }
        linkedInLogo={
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ color: "#000000", fontSize: "var(--icon-size)" }}
          />
        }
        mailLogo={
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#000000", fontSize: "var(--icon-size)" }}
          />
        }
      ></Footer>
    </div>
  );
}

export default App;

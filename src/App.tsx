import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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
      ></Navbar>
      <Home></Home>
      <Footer
        githubLogo={
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            style={{ color: "#000000" }}
          />
        }
        linkedInLogo={
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="xl"
            style={{ color: "#000000" }}
          />
        }
        mailLogo={
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            style={{ color: "#000000" }}
          />
        }
      ></Footer>
    </div>
  );
}

export default App;

import { Images } from "./Images";

import "../styles/Projects.css";

const names = ["IFI Terminal", "Linking Wikipedia Pages"];

const description = [
  "Easy-to-use Python application that displays real-time financial information on the terminal.",
  "C++ program that analyzes Wikipedia pages as a graph and implements traversal algorithms like BFS, IDDFS, and PageRank.",
];

const links = [
  "https://github.com/kpulgari/ifi-terminal",
  "https://github.com/kpulgari/linking-wikipedia-pages",
];

const demos = [
  "https://drive.google.com/file/d/1jaHfjvsNJg4x4zcLPFz05_uAKi_7Y6Ny/view",
  "https://drive.google.com/file/d/1gOjSGB0JahHcqG-SETZk9mJUC08JLbgs/view",
];

const images = Images();

export const Projects = () => {
  const handleGithubClick = (index: number) => {
    window.open(links[index]);
  };

  const handleDemoClick = (index: number) => {
    window.open(demos[index]);
  };

  return (
    <div className="projects-div">
      <div className="carousel">
        <div className="inner-carousel">
          {images.map((image, index) => (
            <div className={`carousel-item ${index}`} key={index}>
              <img src={image} alt={`Project ${index + 1}`} />
              <div className="overlay text">
                <h2 className="project header">{names[index]}</h2>
                <p className="project description">{description[index]}</p>
                <div>
                  <button
                    className="project github button"
                    onClick={() => handleGithubClick(index)}
                  >
                    GitHub
                  </button>
                  <button
                    className="project demo button"
                    onClick={() => handleDemoClick(index)}
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { Images } from "./Images";

import "../styles/Projects.css";

const links = [
  "https://github.com/kpulgari/ifi-terminal",
  "https://github.com/kpulgari/linking-wikipedia-pages",
  "https://github.com/kpulgari/react-todo-app",
];

const names = ["IFI Terminal", "Linking Wikipedia Pages", "Simple Todo App"];
const description = [
  "Easy-to-use Python application that displays real-time financial information on the terminal.",
  "C++ program that analyzes Wikipedia pages as a graph and implements traversal algorithms like BFS, IDDFS, and PageRank.",
  "(title)",
];

export const Projects = () => {
  const images = Images();

  const handleImageClick = (index: number) => {
    window.open(links[index]);
  };

  return (
    <div className="projects-div">
      <div className="carousel">
        <div className="inner-carousel">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index}`}
              onClick={() => handleImageClick(index)}
              key={index}
            >
              <img src={image} alt={`Project ${index + 1}`} />
              <div className="overlay text">
                <h2 className="project header">{names[index]}</h2>
                <p className="project description">{description[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

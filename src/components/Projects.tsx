import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";

import "../styles/Projects.css";

export const Projects = () => {
  const images = Images();

  return (
    <div className="projects-div">
      <motion.div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: 30 }}
          className="inner-carousel"
        >
          {images.map((image, index) => {
            return (
              <motion.div className={`carousel-item ${index}`}>
                <img src={image}></img>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

import React from "react";

export const Footer = () => {
  return (
    <div className="icons">
      <span className="fa-stack small">
        <a
          href="https://github.com/kpulgari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      </span>
      <span className="fa-stack small">
        <a
          href="https://www.linkedin.com/in/kpulgari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
      </span>
      <span className="fa-stack small">
        <a
          href="mailto:kaushikpulgari@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope fa-2x"></i>
        </a>
      </span>
    </div>
  );
};

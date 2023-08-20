import React, { ReactNode } from "react";
import "../styles/Footer.css";

interface Props {
  githubLogo: ReactNode;
  linkedInLogo: ReactNode;
  mailLogo: ReactNode;
}

export const Footer = ({ githubLogo, linkedInLogo, mailLogo }: Props) => {
  return (
    <div className="footer icons">
      <span className="fa-stack">
        <a
          href="https://github.com/kpulgari"
          target="_blank"
          rel="noopener noreferrer"
        >
          {githubLogo}
        </a>
      </span>
      <span className="fa-stack">
        <a
          href="https://www.linkedin.com/in/kpulgari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedInLogo}
        </a>
      </span>
      <span className="fa-stack">
        <a
          href="mailto:kaushikpulgari@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {mailLogo}
        </a>
      </span>
    </div>
  );
};

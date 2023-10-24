import { useState } from "react";
import "../styles/Home.css";

interface Props {
  onHeaderClick: () => void;
  blobColor: string;
}

export const Home = ({ onHeaderClick: onHeaderClick, blobColor }: Props) => {
  return (
    <div className="homepage">
      <div className={`homepage text ${blobColor}`}>
        <h1 className="homepage header" onClick={onHeaderClick}>
          Kaushik Pulgari
        </h1>
        <span className="homepage blurb">CS + Economics @ UIUC</span>
      </div>
      <div className="blobs">
        <div className={`blob one ${blobColor}`}></div>
        <div className={`blob two ${blobColor}`}></div>
        <div className={`blob three ${blobColor}`}></div>
        <div className="blur"></div>
      </div>
    </div>
  );
};

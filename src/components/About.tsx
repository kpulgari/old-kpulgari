import React from "react";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about-div">
      <div className="about text container">
        <h1 className="about-header">Hey!</h1>
        <p className="about-blurb">
          I'm Kaushik, a Junior at the University of Illinois Urbana-Champaign
          studying Computer Science + Economics. I have experience in both
          software development and testing, primarily through internships,
          personal projects, and course work. Currently, I am interested in
          full-stack development and artificial intelligence. Outside of code, I
          enjoy learning about geography, watching sports, and hitting the gym.
          If you want to get in contact, don't hesitate to reach out!
        </p>
        <img
          src="https://github.com/kpulgari/personal-webpage/blob/36081b4dd509e314bd6868b8b45fddc580326a2d/src/assets/profilepic.jpg"
          className="profile-pic"
        ></img>
      </div>
    </div>
  );
};

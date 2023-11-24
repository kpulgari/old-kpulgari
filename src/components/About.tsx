import "../styles/About.css";

import { ProfilePicture } from "./Images";

const profilepic = ProfilePicture();

export const About = () => {
  return (
    <div className="about-div">
      <div className="about text container">
        <h1 className="about-header">Hey!</h1>
        <p className="about-blurb">
          I'm Kaushik, a junior at the University of Illinois Urbana-Champaign
          studying Computer Science + Economics. I have experience in both
          software development and testing, primarily through internships,
          personal projects, and course work. Currently, I am interested in
          full-stack development and artificial intelligence. Outside of code, I
          enjoy learning about geography, watching sports, and hitting the gym.
          If you want to get in contact, please don't hesitate to reach out!
        </p>
        <img
          src={profilepic[0]}
          alt="Kaushik Pulgari Profile Picture"
          className="profile-pic"
        ></img>
      </div>
    </div>
  );
};

import React from "react";
import "./about.css";
import jasonPic from "../assets/me.jpeg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={jasonPic} alt="jason" />
      </div>
      <div className="about__content"></div>
      <p>
        Hi there! My name is Jason, and I'm a web developer based in Portland,
        Oregon. I have over 2 years of experience in web development, and I'm
        passionate about creating beautiful, responsive, and user-friendly
        websites that provide an enjoyable experience for users.
      </p>
      <p>
        I specialize in frontend development, and have experience working with a
        range of web technologies including HTML, CSS, JavaScript, React, and
        more.
      </p>
      <p>
        When I'm not coding, you can find me exercising, playing volleyball, or
        at Super Smash Bros Melee tournaments, or exploring the incredible
        Pacific Northwest.
      </p>
    </div>
  );
};

export default AboutMe;

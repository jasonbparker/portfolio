import React from "react";
import gpt from "../assets/gpt3.png";
import store from "../assets/store.png";

const Projects = () => {
  return (
    <div className="projects__container">
      <div className="project__content">
        <h2>What is GPT3?</h2>
        <img src={gpt} />
        <p>
          Fully Responsive to all viewports and showcasing fine attention to
          detail.
        </p>
        <a
          href="https://whatgpt3jbp.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
        <a
          href="https://github.com/jasonbparker/GPT3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code Repository
        </a>
      </div>
      <div className="project">
        <h2>JBP Store</h2>
        <img src={store} />
        <p>
          Add and remove items to your shopping cart. Showcasing state logic.
        </p>
        <a
          href="https://jabiestore.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
        <a
          href="https://github.com/jasonbparker/eCommerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code Repository
        </a>
      </div>
    </div>
  );
};

export default Projects;

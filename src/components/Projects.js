import React from "react";

const Projects = () => {
  return (
    <div className="projectspage">
      <h1>My Projects</h1>
      <div className="project">
        <h2>Project Name</h2>
        <p>Description of the project</p>
        <a
          href="[Link to project live/demo]"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
        <a
          href="[Link to project code repository]"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code Repository
        </a>
      </div>
      <div className="project">
        <h2>Project Name</h2>
        <p>Description of the project</p>
        <a
          href="[Link to project live/demo]"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo
        </a>
        <a
          href="[Link to project code repository]"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code Repository
        </a>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;

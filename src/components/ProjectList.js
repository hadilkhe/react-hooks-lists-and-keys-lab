import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    (
      <div className="projects">
        {projects.map((project) => (
          <ProjectItem key={project.id} technologies={project.technologies} />
        ))}
      </div>
    );
  }


export default ProjectList;

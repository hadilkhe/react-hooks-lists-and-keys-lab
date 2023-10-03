import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      <h3>Project Technologies:</h3>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <span>{technology}</span>
          </li>
        ))}
      </ul>
    </div>
  
export default ProjectItem;

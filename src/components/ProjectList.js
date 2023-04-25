import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      <ProjectItem id={1} name={"Reciplease"} about={"A receipt tracking app"} technologies={["Rails" , "Bootstrap css"]} ></ProjectItem>

      <ProjectItem id={2} name={"Kibbles and Bitz"} about={"Tinder for dogs"} technologies={["React" , "redux"]} ></ProjectItem>
      
      <ProjectItem id={2} name={"Alien"} about={"Etsy for aliens"} technologies={["React" , "redux" , "Rails"]} ></ProjectItem>
      </div>
    </div>
  );
}

export default ProjectList;

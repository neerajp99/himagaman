import React from "react";

// Project items
const projectItems = [
  {
    id: 1,
    subtitle: "HimGyaan",
    title: "Himagaman Education Programs",
    img: "edu.png"
  },
  {
    id: 2,
    subtitle: "Parwaaz",
    title: "Personality Development Through Sports",
    img: "sport.png"
  },
  {
    id: 3,
    subtitle: "Adventhrill",
    title: " Experiences of Outdoor Adventures and Wildlife Expeditions",
    img: "adventure.png"
  }
];

const Projects = () => {
  return (
    <section className="project_items">
      <div className="container-fluid">
        <div className="row">
          {projectItems.map((projectItem, key) => (
            <div key={key} className="project_item_container">
              <div className="project_details">
                <span> {projectItem.subtitle}</span>
                <h2> {projectItem.title} </h2>
              </div>
              <div className="project_image">
                <img
                  src={require(`../assets/img/${projectItem.img}`)}
                  alt={projectItem.subtitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import data from "../../Projects.json";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  // slider
  const sliderRef = useRef(null);

  function activate(e) {
    const items = sliderRef.current.querySelectorAll(".item");
    if (e.target.matches(".next")) {
      sliderRef.current.append(items[0]);
    }
    if (e.target.matches(".prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  }

  return (
    <main className=" mx-auto">
      <ul ref={sliderRef} className="slider">
        {projects.map((project) => (
          <li
            key={project.id}
            className="item"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="content bg-black bg-opacity-50 p-3 md:p-10">
              <h2 className="title text-xl font-semibold text-cyan-500">
                {project.name}
              </h2>
              <p className="description">{project.description}</p>
              <button className="button-read">Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav flex gap-10" onClick={activate}>
        <i className="bx bx-left-arrow-alt btn prev"></i>
        <i className="bx bx-right-arrow-alt btn next"></i>
      </nav>
    </main>
  );
};

export default Projects;

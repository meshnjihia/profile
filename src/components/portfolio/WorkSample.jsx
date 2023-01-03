import React, { useState, useEffect } from "react";
import { DataNav, Data } from "./Data";
import WorkItems from "./WorkItems";


const WorkSample = () => {

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
    useEffect(() => {
      if (item.name === "all") {
        setProjects(Data);
      } else {
        const newProjects = Data.filter((project) => {
          return project.category === item.name;
        });
        setProjects(newProjects);
      }
    }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
    active(index);
    projects(index);
  }
  
  return (
    <div>
      <div className="work__filters">
        {DataNav.map((item, index) => {
          return (
            <span
              className="work__item"
              key={item.name}
              onClick={(e) => {handleClick(e, index)}}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {Data.map((item) => {
          return (
            <WorkItems
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WorkSample
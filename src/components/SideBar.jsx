import React from "react";
import Button from "./Button";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 rounded-r-xl text-stone-50 bg-stone-900 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let styles =
            "w-full px-2 py-1 my-1 text-left rounded-sm  hover:text-stone-200 bg-stone-800";
          if (project.id === selectedProjectId) {
            styles += " bg-stone-800 text-stone-200";
          } else {
            styles += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={styles}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

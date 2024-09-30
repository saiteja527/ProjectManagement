import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ projects, onDelete,onAddTask,onDeleteTask,tasks }) => {
  const formattedDate = new Date(projects.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {projects.title}
          </h1>
          <button
            className="px-4 py-2 rounded-md text-stone-600 hover:text-stone-950 hover:bg-stone-300"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {projects.description}
        </p>
      </header>
      <Tasks OnAdd={onAddTask} OnDelete={onDeleteTask } tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;

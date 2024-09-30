import React from "react";
import NewTasks from "./NewTasks";

const Tasks = ({ OnAdd, OnDelete, tasks }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTasks onAdd={OnAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800 ">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-xl bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={()=>OnDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

import React, { useState } from "react";

const NewTasks = ({ onAdd }) => {
  let inputStyle =
    "w-64 p-1 border-b-2 rounded-sm shadow-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={inputStyle}
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTasks;

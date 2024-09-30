import React from "react";
import Images from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectsAdded = ({ onStartAddProject }) => {
  return (
    <div className="w-2/3 mt-24 text-center ">
      <img
        src={Images}
        alt="No projects Image"
        className="object-contain mx-auto size-1/4"
      />
      <h2 className="my-4 text-3xl font-bold text-stone-500">
        No Projects Selected
      </h2>
      <p className="mb-4 text-xl text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectsAdded;

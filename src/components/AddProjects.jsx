import React, { useRef } from "react";
import Input from "./Input";
import Image from "../assets/addprojects.png";
import { BiBookAdd } from "react-icons/bi";
import Modal from "./Modal";
const AddProjects = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-3xl font-bold text-stone-700">
          Invalid Input
        </h2>
        <p className="mb-4 text-stone-600">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          please make sure you provide a valid value for every input.
        </p>
      </Modal>
      <div className="flex mt-16">
        <div className="w-[38rem] h-[25rem] rounded-md bg-stone-200 p-6 shadow-md">
          <h2 className="flex gap-2 text-3xl font-bold uppercase text-stone-700">
            Add Project
            <BiBookAdd className="size-7" />
          </h2>
          <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="DueDate" />
          </div>
          <menu className="flex justify-end gap-4 my-4 item-center">
            <li>
              <button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}
              >
                Save
              </button>
            </li>
            <li>
              <button
                className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950 hover:bg-stone-300"
                onClick={onCancel}
              >
                Cancel
              </button>
            </li>
          </menu>
        </div>
        <div className="w-[20rem] ml-[10rem]">
          <img src={Image} alt="Add projects image" className="size-100 " />
        </div>
      </div>
    </>
  );
};

export default AddProjects;

import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import Nav from "./Nav";
import Modal from "./Modal";

const Forground = () => {
  const ref = useRef(null);
  const [modal, setModal] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("task");
      const savedTasks = saved ? JSON.parse(saved) : [];
      setTodo(savedTasks);
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      setTodo([]);
      localStorage.removeItem("task"); // optionally reset it
    }
  }, []);

  const createTask = () => {
    if (inputvalue === "") {
      alert("Write something..");
    } else {
      const updatedTasks = [...todo, inputvalue];
      setTodo(updatedTasks);
      localStorage.setItem("task", JSON.stringify(updatedTasks));
      setModal(false);
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setInputValue(todo[index]);
    setModal(true);
  };

  const updateTask = () => {
    if (inputvalue === "") {
      alert("Write something..");
    } else {
      const updatedTasks = [...todo];
      updatedTasks[editIndex] = inputvalue;
      setTodo(updatedTasks);
      localStorage.setItem("task", JSON.stringify(updatedTasks));
      setModal(false);
      setInputValue("");
      setIsEdit(false);
      setEditIndex(null);
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = todo.filter((_, i) => i !== index);
    setTodo(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  return (
    <>
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          inputvalue={inputvalue}
          setInputValue={setInputValue}
          createTask={createTask}
          isEdit={isEdit}
          updateTask={updateTask}
        />
      ) : (
        <div
          ref={ref}
          className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-8"
        >
          <Nav setModal={setModal} />
          {todo.map((item, index) => (
            <Card
              data={item}
              key={index}
              reference={ref}
              onEdit={handleEdit}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Forground;

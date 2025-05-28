import React from "react";
import { motion } from "motion/react";

const Modal = ({
  modal,
  setModal,
  inputvalue,
  setInputValue,
  createTask,
  isEdit,
  updateTask,
}) => {
  return (
    <div className="modal absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-zinc-900  h-[30%] w-[40%] sm:w-[30%] md:w-[20%] rounded-4xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <input
          required
          className="text-center focus:outline-none bg-zinc-900 rounded text-white"
          type="text"
          placeholder="Set your task.."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputvalue}
        />
        <div className="modalbtn mt-3 text-sm flex justify-center text-white">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setModal(false)}
            className="btn m-2 p-1 rounded bg-zinc-700 cursor-pointer font-semibold"
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={isEdit ? updateTask : createTask}
            className="btn m-2 p-1 rounded bg-zinc-700 cursor-pointer font-semibold"
          >
            Done
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { LuFileSliders } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, scale } from "motion/react";
import { CiEdit } from "react-icons/ci";

const Card = ({ data, reference, onEdit, onDelete, index }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileHover={{ cursor: "grab" }}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-[60%] sm:w-[35%] md:w-[27%] lg:w-[20%] h-70 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden flex-wrap flex-col shadow"
    >
      <p className="text-sm text-center mt-5 font-semibold leading-tight">
        {data}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-3 shrink-0">
          <span className="cursor-pointer" onClick={() => onEdit(index)}>
            <CiEdit size=".9em" />
          </span>
          <span
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => onDelete(index)}
          >
            {<IoClose size=".7em" color="white" />}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { motion } from "motion/react";

const Nav = ({setModal}) => {
  return (
    <nav className="relative w-full">
      <div className="flex gap-5 items-center absolute right-5">
        <motion.span
          className="text-white cursor-pointer"
          whileTap={{ scale: 0.9 }}
          onClick={()=>setModal(true)}
        >
          <IoIosAddCircle
              size={30}/>
        </motion.span>
      </div>
    </nav>
  );
};

export default Nav;

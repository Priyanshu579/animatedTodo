import React from "react";

const Background = () => {
  return (
      <div className="absolute bg-#000000 w-full h-full" id="background_component">
        <div className="fixed z-[2] top-[5%] w-full py-10 flex justify-center text-zinc-600 text-[30px] font-semibold">
          setYourTasks
        </div>
          <img src="/animatedTodo/cat.gif" alt="cat" className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"/>
      </div>
  );
};

export default Background;

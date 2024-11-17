import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, start,para, hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between hover:${hover}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Anything in heading</h1>
      </div>
      <div className="down w-full ">
       { start && (
            <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
        <button className="mt-5 rounded-full px-5 py-2 border-[1px] border-zinc-50">Contact Us</button>
            </>
        )}
        { para && <p className="text-sm text-zinc-500 font-medium mt-5">Lorem ipsum dolor sit amet consectetur.</p>}
      </div>
    </div>
  );
}

export default Card;

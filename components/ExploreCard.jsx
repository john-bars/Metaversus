"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
      className={`relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2] "
      }`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-3xl"
      />

      {active !== id ? (
        <h3 className="font-semibold text-slate-100 sm:text-[26px] text-lg absolute lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full rounded-3xl lg:rounded-t-none flex flex-col bg-black opacity-50 ">
          <div className="flex justify-center items-center w-[60px] h-[60px] rounded-3xl glassmorphism mb-4">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-xl text-slate-100 uppercase">
            Enter the Meteverse
          </p>
          <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-slate-100">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;

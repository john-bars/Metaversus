"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex flex-col md:flex-row gap-4"
    >
      <img
        src={imgUrl}
        alt="planet-01"
        className="w-full h-[250px] rounded-[2rem] object-cover md:w-[270px] "
      />
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col flex-1 md:ml-[62px] max-w-[650px]">
          <h4 className="font-normal text-white text-2xl lg:text-[42px] ">
            {title}
          </h4>
          <h4 className="font-normal text-slate-300 mt-4 lg:text-xl text-sm">
            {subtitle}
          </h4>
        </div>
        <div className="hidden justify-center items-center w-[100px] h-[100px] lg:flex bg-transparent border-white border-[1px] rounded-full ">
          <img
            src="arrow.svg"
            alt="arrow"
            className="w-2/5 h-2/5 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;

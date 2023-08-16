"use client";

import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <section className="relative z-0 sm:p-16 xs:p-8 px-6 py-12">
      <motion.div className="flex flex-col lg:flex-row mx-auto gap-6 2xl:max-w-[1280px] w-full">
        <motion.div className="flex justify-end flex-col relative flex-[0.5] lg:max-w-[370px] p-4 sm:p-4 rounded-[32px] border-[1px] border-gray-400 gradient-05 ">
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold text-[26px] sm:text-[32px] leading-9 sm:leading-[40px] text-white">
              Samantha
            </h4>
            <p className="font-normal mt-2 text-white text-xs sm:text-lg sm:leading-6 leading-4">
              Founder | Metaversus
            </p>
          </div>
          <p>
            "With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. By using
            metaverse, you can use it as anything."
          </p>
        </motion.div>
        <motion.div className="relative flex flex-1 justify-center items-center">
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="object-cover w-full h-auto lg:h-[610px] min-h-[210px] rounded-[40px]"
          />
          <motion.div className="hidden absolute lg:block top-[3%] -left-[10%] ">
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;

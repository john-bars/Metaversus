"use client";

import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import { container, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8 justify-center "
      >
        <motion.div className="flex justify-center items-center lg:w-1/2 ">
          <img
            src="/get-started.png"
            alt="get-started"
            className="object-contain w-[90%]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col "
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks.</>} />
          <div className="flex flex-col max-w-[370px] gap-6 mt-8">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;

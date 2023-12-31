"use client";

import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import { container, fadeIn, planetVariants } from "@/utils/motion";
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
        <motion.div
          variants={planetVariants("left")}
          className="flex justify-center items-center lg:w-1/2 "
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="object-contain w-[90%]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col items-center px-8"
        >
          <div className="flex flex-col justify-center items-start">
            <TypingText title="| How Metaversus Works" />
            <TitleText title={<>Get started with just a few clicks.</>} />
          </div>
          <div className="flex flex-col max-w-[450px] lg:max-w-[370px] gap-2 lg:gap-6 mt-9">
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

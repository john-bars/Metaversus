"use client";

import { NewFeature, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import { container, fadeIn, planetVariants } from "@/utils/motion";
import { motion } from "framer-motion";

const WhatsNew = () => {
  return (
    <section className="mt-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full flex lg:flex-row flex-col gap-4 justify-center mx-auto"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" flex flex-[0.75] justify-center flex-col items-center px-8"
        >
          <div className="flex flex-col justify-start items-start">
            <TypingText title="| What's New?" />
            <TitleText
              title={<>What's new about Metaversus </>}
              textStyles={`text-xl sm:2xl`}
            />
          </div>
          <div className="flex flex-wrap justify-between gap-6 mt-8">
            {newFeatures.map((feature) => (
              <NewFeature key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flex justify-center items-center lg:w-1/2"
        >
          <img
            src="/whats-new.png"
            alt="what's new"
            className="object-contain w-[90%] h-[90%]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;

"use client";

import { TypingText } from "@/components";
import { container, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center"
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-xl text-center text-slate-100 sm:px-2 leading-9"
        >
          <span className="font-extrabold text-slate-100">Metaverse</span> is a
          new thing in the future, where you can enjoy the virtual world by
          feeling like it's really real. You can feel what you feel in the
          metaverse world because this is really the{" "}
          <span className="font-extrabold text-slate-100">
            madness of the universe
          </span>
          of today. Using only{" "}
          <span className="font-extrabold text-slate-100">VR</span> devices, you
          can easily explore the metaverse world you want. Turn your dreams into
          reality. Let's explore the madness of the metaverse by scrolling down!
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-4.5 h-7 object-contain mt-7"
        />
      </motion.div>
    </section>
  );
};

export default About;

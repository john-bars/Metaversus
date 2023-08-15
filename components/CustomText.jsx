"use client";

import { container, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ textStyles, title }) => (
  <motion.p
    variants={container}
    className={`font-normal text-lg text-slate-100 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ textStyles, title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles} mt-2 font-bold md:text-xl text-2xl text-slate-100`}
  >
    {title}
  </motion.h2>
);

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { container, textVariant } from "@/utils/motion";
import { styles } from "@/styles";

const Hero = () => {
  return (
    <section className="sm:py-4 xs:py-2 px-1.5 py-3 mt-[15vh]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-7xl w-full mx-auto flex flex-col"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.h1 variants={textVariant(1.8)} className={styles.heroHeading}>
            METAVERSE
          </motion.h1>
          <motion.div
            variants={textVariant(2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <h1 className={`${styles.heroHeading} ${styles.heroDText}`}>D</h1>
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

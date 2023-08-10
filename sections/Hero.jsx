"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { container } from "@/utils/motion";
import { styles } from "@/styles";

const Hero = () => {
  return (
    <section>
      <motion.div
        variants={container(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col justify-center items-center">
          <motion.h1>METAVERSE</motion.h1>
          <motion.div className="flex flex-row justify-center items-center">
            <h1 className={styles.heroHeading}>Ma</h1>
            <h1
              className={`${styles.heroHeading} scale-x-[2] px-3.5 sm:px-4 md:px-7 lg:px-10 xl:px-11 2xl:px-12`}
            >
              D
            </h1>
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

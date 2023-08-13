"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { container, textVariant, slideIn } from "@/utils/motion";
import { styles } from "@/styles";

const Hero = () => {
  return (
    <section className="sm:py-4 xs:py-2 px-1.5 py-3 mt-[10vh]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-7xl w-full mx-auto flex flex-col"
      >
        <div className="flex flex-col justify-center items-center z-10">
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

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3 -top-8 "
        >
          {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-8 z-0 " /> */}
          <Image
            src="/cover.png"
            alt="cover"
            width={500}
            height={350}
            className="w-full object-cover rounded-tl-[160px] rounded-bl-[50px] relative z-10 sm:h-[500px] xs:max-lg:ml-4 xl:ml-16 ml-16 "
          />

          <a
            href="#explore"
            className="flex justify-end  sm:-mt-[70px] -mt-[50px] mr-20"
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              width={100}
              height={100}
              className="sm:w-[155px] sm:h-[155px] object-contain z-10"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { container, textVariant, slideIn } from "@/utils/motion";
import { styles } from "@/styles";

const Hero = () => {
  return (
    <section className="sm:py-4 xs:py-2 py-3 mt-[10vh]">
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
          className="relative w-full md:-mt-5 -mt-3 -top-4 md:-top-8 pl-[10vw]"
        >
          <div className="absolute w-full h-[260px] -top-5 sm:h-[370px] sm:-top-5 md:h-[530px] md:-top-8 hero-gradient rounded-tl-[140px]  z-0 " />
          <Image
            src="/cover.png"
            alt="cover"
            width={500}
            height={350}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-tl-[140px] z-10 relative "
          />

          <a
            href="#explore"
            className="flex justify-end  sm:-mt-[60px] md:-mt-[70px] -mt-[50px] pr-15vw"
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              width={100}
              height={100}
              className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[155px] md:h-[155px] object-contain z-10"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

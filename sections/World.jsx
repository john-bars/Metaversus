"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn, container } from "@/utils/motion";
import { TypingText, TitleText } from "@/components";

const World = () => {
  return (
    <section>
      <motion.div>
        <TypingText title="| People of the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world.
            </>
          }
          textStyles="text-center"
        />

        <motion.div>
          <Image src="/map.png" alt="map" fill />
          <img src="/people-01.png" alt="people" />
          <img src="/people-02.png" alt="people" />
          <img src="/people-03.png" alt="people" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;

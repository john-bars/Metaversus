"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn, container } from "@/utils/motion";
import { TypingText, TitleText } from "@/components";

const World = () => {
  return (
    <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12">
      <motion.div className="flex flex-col mx-auto 2xl:max-w-[1280px] w-full">
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

        <motion.div className="relative mt-[68px] flex w-full h-[40vw] ">
          <Image src="/map.png" alt="map" fill />
          <img
            src="/people-01.png"
            alt="people"
            className="w-[5vw] h-[5vw] absolute bottom-[12%] right-[7%] p-[0.5vw] rounded-full bg-gray-500 "
          />
          <img
            src="/people-02.png"
            alt="people"
            className="top-[10%] left-[10%] w-[5vw] h-[5vw] absolute  p-[0.5vw] rounded-full bg-gray-500 "
          />
          <img
            src="/people-03.png"
            alt="people"
            className="top-[50%] left-[45%] w-[5vw] h-[5vw] absolute p-[0.5vw] rounded-full bg-gray-500 "
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;

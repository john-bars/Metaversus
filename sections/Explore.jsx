"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { TypingText, TitleText, ExploreCard } from "@/components";
import { container } from "@/utils/motion";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col mx-auto 2xl:max-w-[1280px] w-full"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore.
            </>
          }
          textStyles="text-center"
        />
        <div className="flex min-h-[70vh] gap-5 mt-[50px] lg:flex-row flex-col">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

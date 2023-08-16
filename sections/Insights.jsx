"use client";

import { motion } from "framer-motion";

import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className="relative z-0 sm:p-16 xs:p-8 px-6 py-12">
      <motion.div className="flex flex-col mx-auto 2xl:max-w-[1280px] w-full">
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="flex flex-col mt-12 gap-[2rem]">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;

"use client";

import { motion } from "framer-motion";

import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section>
      <motion.div>
        <TypingText title={""} textStyles={""} />
        <TitleText title={""} textStyles={""} />
        <div>
          {insights.map((insight, index) => (
            <InsightCard />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;

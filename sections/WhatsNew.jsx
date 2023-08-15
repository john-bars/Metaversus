"use client";

import { NewFeature, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import { motion } from "framer-motion";

const WhatsNew = () => {
  return (
    <section>
      <motion.div>
        <motion.div>
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about Metaversus </>} />
          <div>
            {newFeatures.map((feature) => (
              <NewFeature key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;

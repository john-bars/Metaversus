"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div>
      <img src={imgUrl} alt="planet-01" />
      <div>
        <div>
          <h4>{title}</h4>
          <h4>{subtitle}</h4>
        </div>
        <div>
          <img src="arrow.svg" alt="arrow" />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;

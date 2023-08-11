"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { container, navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative py-2"
    >
      <div className="absolute w-1/2 inset-0 gradient-01 " />
      <div className="flex justify-between items-center my-4">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2 className="font-extrabold text-2xl leading-7 ">METAVERSUS</h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;

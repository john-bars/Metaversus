"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex justify-between items-center my-4"
    >
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
    </motion.nav>
  );
};

export default Navbar;

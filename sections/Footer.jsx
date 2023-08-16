"use client";

import { socials } from "@/constants";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="relative py-8 sm:p-16 xs:p-8 px-6"
    >
      <div className="footer-gradient" />
      <div className="flex flex-col gap-8 mx-auto 2xl:max-w-[1280px] w-full">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h4 className="text-white text-[44px] md:text-[64px] font-bold">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 rounded-[2rem] gap-3 bg-blue-600"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-6 h-6 object-contain"
            />
            <span className="font-normal text-white text-base">
              ENTER THE METAVERSE
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="bg-white opacity-10 mb-[50px]" />
          <div className="flex justify-center items-center flex-wrap gap-4">
            <h4 className="font-extrabold text-white text-2xl ">Metaversus</h4>
            <p
              className="font-normal text-sm text-white opacity-50
            "
            >
              Copyright {`\u00A9`} 2023-2024 Metaversus. All right reserve
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="object-contain w-6 h-6 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

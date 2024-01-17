"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between max-w-4xl mx-auto z-50">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/michal-horodyski-722246273/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Mim-Sky/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/mimskky/"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-[grey] cursor-pointer"
      >
        <a href="#contact">
          <button className=" text-[#F7AB0A] hover:ring-2 ring-[#F7AB0A] duration-200 ease-in-out font-bold text-xl py-2 px-4 rounded-full md:inline-flex">
            <p className="upperCase">Get In Touch</p>
          </button>
        </a>
      </motion.div>
    </header>
  );
}

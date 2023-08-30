"use client";
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion, useReducedMotion, MotionConfig } from "framer-motion";



type Props = {};

export default function Header({}: Props) {
  return (
  <header className="sticky top-0 flex p-5 justify-between max-w-4xl mx-auto z-50"> 
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
    className="flex flex-row items-center">
      <SocialIcon url="https://linkedin.com" 
        fgColor="grey" 
        bgColor="transparent" 
        />
        <SocialIcon url="https://github.com" 
        fgColor="grey" 
        bgColor="transparent" 
        />
        <SocialIcon url="https://youtube.com" 
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
    className="flex flex-row items-center text-[grey] cursor-pointer">
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <button className="bg-[#F7AB0A] hover:bg-[#f0be54] duration-200 ease-in-out text-white text-xs font-bold py-2 px-4 rounded-full hidden md:inline-flex">
      <p className="upperCase">
        Get In Touch
      </p>
      </button>
    </motion.div>
  </header>
  );
}

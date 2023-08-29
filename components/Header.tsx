"use client";
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";


type Props = {};

export default function Header({}: Props) {
  return (
    // sticky top-0? in header //
  <header className="flex p-5 justify-between max-w-7xl mx-auto z-50 xl:items-center"> 
    {/* Social icons */} 
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
        fgColor="gray" 
        bgColor="transparent" 
        />
        <SocialIcon url="https://github.com" 
        fgColor="gray" 
        bgColor="transparent" 
        />
        <SocialIcon url="https://youtube.com" 
        fgColor="gray" 
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
    className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="upperCase hidden md:inline-flex text-gray-400 ">
        Get In Touch
      </p>
    </motion.div>
  </header>
  );
}

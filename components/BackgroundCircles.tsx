"use client";
import React from 'react';
import { motion, useReducedMotion, MotionConfig } from "framer-motion";
import Image from 'next/image';


type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
  <MotionConfig reducedMotion="user">  
    <motion.div
    initial={{
      opacity: 0,
    }} 
    animate={{
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2.5,
    }}
    className="relative flex justify-center items-center">
      <div className="absolute rounded-full border border-[#333333] h-[100px] w-[100px] mt-32" />
      <div className="rounded-full border border-[#333333] h-[150px] w-[150px] absolute mt-32" />
      
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[250px] w-[250px] absolute mt-32" />
    </motion.div>
  </MotionConfig>
  )
}
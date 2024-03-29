"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import mimsky from "../public/mimsky.png";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Michal",
      "I love to learn and create",
      "Did I mentioned my other names?",
      "They are: <Explore/>, <Adventure/>, <Live/> ;-)",
    ],
    loop: true,
    delaySpeed: 2700,
    deleteSpeed: 30,
  });
  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.6,
      }}
      className="h-screen flex space-y-10 flex-col items-center justify-center text-center overflow-hidden"
    >
      <Image
        className=" rounded-full mx-auto object-cover"
        alt="mimsky"
        src={mimsky}
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-grey pb-2 tracking-[0.8rem] font-semibold">
          Web developer
        </h2>
      </div>
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="siteYellow" />
        </h1>
      </div>
      <div className="z-10 flex flex-col md:flex-row space-x-2 pt-12 items-center">
        <a href="#about">
          <button className="heroButton outline-none">About</button>
        </a>
        <a href="#expirience">
          <button className="heroButton outline-none">Experience</button>
        </a>
        <a href="#projects">
          <button className="heroButton outline-none">Projects</button>
        </a>
        <a href="#contact">
          <button className="heroButton outline-none">Contact</button>
        </a>
        <a href="https://mimsky.is">
          <button className="heroButton outline-none">Blog</button>
        </a>
      </div>
    </motion.div>
  );
}

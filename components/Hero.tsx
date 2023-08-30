"use client";
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import mimsky from '../public/mimsky.png';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Michal",
      "I love to learn and create",
      "Did I mentioned my other names?",
      "They are: <Explore/>, <Adventure/>, <Live/> ;-)",
      ],
      loop: true,
      delaySpeed: 1500,
  });
  return (
  <div className='h-screen flex flex-col space-y-3 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
    <Image className='relative rounded-full mx-auto pbject-cover'
        alt="mimsky"
        src={mimsky}
        width={96}
        height={96}
        />
    <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[0.8rem]">Web developer
      </h2>
      <h1 className="text-xl lg:text-3xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
      </h1>
      <div className="pt-5" >
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
        <a href="#expirience">
          <button className="heroButton">Experience</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </div>      
  </div>
  )
}

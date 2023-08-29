"use client";
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Michal",
      "I love to learn and create",
      "Did I mention my second names?",
      "They are: <Explore/>, <Adventure/>, <Live/> ;)",
      ],
      loop: true,
      delaySpeed: 1500,
  });
  return (
  <div>
    <h1>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </h1>
  </div>
  )
}

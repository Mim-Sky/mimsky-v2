"use client";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExpirience from "../components/WorkExpirience";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";



export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    {/*  */}
    <div className="bg-[rgb(36,36,36)] text-amber-500 h-screen snap-y snap-mandatory z-0 overflow-scroll">  {}
      {/* {HEADER} */}
      <Header />
      {/* {HERO} */} 
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* {ABOUT} */}
      <section id="about" className="snap-center">
      <About />
      </section>
      {/* {EXPIRIENCE} */}
      <section id="expirience" className="snap-center">
        <WorkExpirience />
      </section>
      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
    </MotionConfig>
  );
}

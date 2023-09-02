"use client";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExpirience from "../components/WorkExpirience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[rgb(36,36,36)] text-amber-500 h-screen snap-y snap-mandatory z-0 overflow-scroll">  {}
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="expirience" className="snap-center">
          <WorkExpirience />
        </section>
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        <section id="projects" className="snap-center">
          <Projects />
        </section>
      </div>
    </MotionConfig>
  );
}

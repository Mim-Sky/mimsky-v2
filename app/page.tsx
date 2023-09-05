"use client";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExpirience from "../components/WorkExpirience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";
import Link from 'next/link'
import {ChevronUpIcon} from '@heroicons/react/24/solid';

 function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[rgb(36,36,36)] text-whiteText h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20
       scrollbar-thumb-siteYellow/50">
        <head>
          <title>Michal Horodyski</title>
          <meta property="og:title content" content="Michal Horodyski" key="title"/>
        </head>
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="expirience">
          <WorkExpirience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
          <ChevronUpIcon 
          href="#hero"
          className="text-[#F7AB0A] h-10 w-10 filter grayscale hover:grayscale-0"  />
          </div>
        </footer>
        </Link>
      </div>
    </MotionConfig>
    
  );
}

export default Home;










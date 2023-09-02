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
      <div className="bg-[rgb(36,36,36)] text-whiteText h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20
       scrollbar-thumb-siteYellow/50">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="expirience" className="snap-center">
          <WorkExpirience />
        </section>
        {/* <section id="projects" className="snap-start">
          <Projects />
        </section> */}
        <section id="contact" className="snap-start">
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

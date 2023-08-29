import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Mimsky's portfolio",
  description: "...",
};

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-amber-500 h-screen">
      {/* {HEADER} */}
      <Header />
      {/* {HERO} */}
      <section id="hero">
        <Hero />
      </section>
      {/* {ABOUT} */}

      {/* {EXPIRIENCE} */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  );
}

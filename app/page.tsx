import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Mimsky's portfolio",
  description: "...",
};

export default function Home() {
  return (
    <div>
      {/* {HEADER} */}
      <Header />
      {/* {HERO} */}

      {/* {ABOUT} */}

      {/* {EXPIRIENCE} */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </div>
  );
}

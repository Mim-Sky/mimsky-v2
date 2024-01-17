import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <article className="flex flex-col justify-center items-center gap-3 md:gap-16">
        <h3 className="mt-16 uppercase tracking-[15px] text-grey text-base md:text-xl mx-auto">
          About
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex mx-auto"
        >
          <section className="flex flex-col md:flex-row items-center md:gap-x-10">
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Image
                src="/mimsky-portrait.png"
                width={500}
                height={500}
                alt="Portrait of Michal smiling on a green hill above small English town"
                className="brightness-90 w-36 h-36 md:w-56 md:h-56 md:ml-7 rounded-full object-cover 
            md:rounded-md lg:w-[250px] lg:h-[375px]"
              />
            </motion.div>
            <section className="mx-auto flex flex-col items-center md:items-start gap-y-5 px-10 md:px-0 ">
              <h4 className="text-xl md:text-2xl text-whiteText font-semibold">
                Here is a <span className="text-siteYellow/40">little</span>{" "}
                background
              </h4>
              <p className="text-whiteText ">
                {" "}
                Welcome to my corner of the digital world! 🚀 I&apos;m a
                passionate software developer with a year-long journey
                specializing in front-end technologies like PHP, WordPress,
                React, and the sleek styling of Tailwind CSS. Beyond the lines
                of code, my fascination with electronics and IT blossomed during
                my teenage years. I&apos;ve tinkered with hardware, constructing
                and managing my own computers—a hobby turned into a lifelong
                interest. On the software side, I&apos;m in a perpetual state of
                learning. My love for efficiency led me to the world of data
                containerization, where Docker is my playground for streamlined
                development and deployment. When not immersed in the virtual
                realm, I indulge in the tangible joy of constructing and
                building. I&apos;ve proudly assembled my own server from scratch
                and now find joy in mastering the art of server management. Join
                me on this journey where technology meets creativity, and every
                code line is a step toward innovation! 🌐💻 #TechEnthusiast
                #CodeArtisan <br></br> During my no computer time I make use of
                Iceland&apos;s incredible enviroment and opportunities. I am a
                rock and ice climber (with glacier guiding certificate), hiker
                and a cyclist. I actively take part in a volounteer work (like
                `Hreinni Hornstrandir`).
              </p>
            </section>
          </section>
        </motion.div>
      </article>
    </div>
  );
}

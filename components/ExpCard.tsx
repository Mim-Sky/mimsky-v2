import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'


type Props = {}

export default function ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ 
          opacity: 1, 
          y: 0 
        }}
        viewport={{ once: true }}
        className="flex"
        >
        <Image
          src="/gowork-logo.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w36 h36 rounded-full xl:w-[200px] object-cover object-center "
        />
      </motion.div>
      <section className="text-whiteText px-0 md:px-10 overflow-y-auto">
        <h4 className="text-2xl font-light">WEB DEVELOPER</h4>
        <p className="font-bold text-1xl mt-1">GoWork.pl</p>
        <div className="flex space-x-2 my-2">
        <Image
          src="/html.png"
          width={150}
          height={150}
          alt="html logo"
          className="w-10 h-10"
        />
        <Image
          src="/css3.png"
          width={150}
          height={150}
          alt="css logo"
          className="w-10 h-10"
        />
        <Image
          src="/php.png"
          width={150}
          height={150}
          alt="php logo"
          className="w-10 h-10"
        />
        <Image
          src="/wordpress.png"
          width={150}
          height={150}
          alt="wordpress logo"
          className="w-10 h-10"
        />
        <Image
          src="/javascript.png"
          width={150}
          height={150}
          alt="javascript logo"
          className="w-16 h-10"
        />
        </div>
        <p className="uppercase py-5 text-gray">Started work 05.2023 - </p>
        <ul className="text-whiteText list-disc space-y-4 text-sm md:text-base">
          <li>Design and deployment of new web apps and layouts using HTML, CSS and Bootstrap CSS</li>
          <li>Frontend layout technologies: Flexbox, Grid, Bootstrap</li>
          <li>Backend: PHP</li>
          <li>Wordpress administration (updates, plugins etc.)</li>
        </ul>
      </section>
    </article>
  )
}
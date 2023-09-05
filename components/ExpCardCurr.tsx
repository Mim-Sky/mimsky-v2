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
          src="/mimsky.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w36 h36 rounded-full object-cover object-center"
        />
      </motion.div>
      <section className="text-whiteText px-0 md:px-10 overflow-y-auto">
        <h4 className="text-2xl font-light">CURRENTLY LEARNING</h4>
        <div className="flex space-x-2 my-2">
        <Image
          src="/react.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        <Image
          src="/nextjs.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        <Image
          src="/ts.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        <Image
          src="/php.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        <Image
          src="/javascript.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-16 h-10"
        />
        </div>
        <p className="uppercase py-5 text-gray ">Started: 10-2022 - </p>
        <ul className="text-whiteText list-disc space-y-4 ml-5 text-sm md:text-base">
          <li>FrontEnd development: JavaScript, TrueScript, React.js </li>
          <li>Backend development: PHP and Next.js</li>
          <li>Backend: Node.js, Next.js</li>
          <li>Sanity.io CMS implementation</li>
        </ul>
      </section>
    </article>
  )
}
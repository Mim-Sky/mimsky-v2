import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'


type Props = {}

export default function ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      
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
      <div className="text-whiteText px-0 md:px-10 overflow-y-auto  ">
        <h4 className="text-3xl font-light">WEB DEVELOPER</h4>
        <p className="font-bold text-1xl mt-1">GoWork.pl</p>
        <div className="flex space-x-2 my-2">
        <Image
          src="/html.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        <Image
          src="/css3.png"
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
          src="/wordpress.png"
          width={150}
          height={150}
          alt="gowork company logo"
          className="w-10 h-10"
        />
        </div>
        <p className="uppercase py-5 text-gray ">Started work... - Ended...</p>
        <ul className="text-whiteText list-disc space-y-4 ml-5 text-md ">
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          
        </ul>
      </div>
    </article>
  )
}
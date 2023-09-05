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
          src="/tvn_logo.png"
          width={100}
          height={100}
          alt="tvn company logo"
          className="w20 h20 rounded-full object-cover object-center "
        />
      </motion.div>
      <section className="text-whiteText px-0 md:px-10 overflow-y-auto  ">
        <h4 className="text-2xl font-light">CUSTOMER SERVICE</h4>
        <p className="font-bold text-1xl mt-1">TVN Player</p>
        <div className="flex space-x-2 my-2">
        <Image
          src="/jira.png"
          width={200}
          height={150}
          alt="jira logo"
          className="w-20 h-10"
        />
        <Image
          src="/slack.png"
          width={150}
          height={150}
          alt="slack logo"
          className="w-10 h-10"
        />
        </div>
        <p className="uppercase py-5 text-gray ">Started work 09.2010 - Ended 12.2016</p>
        <ul className="text-whiteText list-disc space-y-4 ml-5 text-sm md:text-base">
          <li>Daily customer service for VOD Web App player.pl</li>
          <li>Solving customer technical issues with app over phone and emails</li>
          <li>Developing customer service strategies</li>
          <li>Bugs/errors tracing in app (Web, iOS, Android, TV platforms)</li>
        </ul>
      </section>
    </article>
  )
}
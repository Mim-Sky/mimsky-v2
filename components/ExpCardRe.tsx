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
          src="/re_logo.png"
          width={150}
          height={150}
          alt="reykjavik excursions company logo"
          className="w36 h36 rounded-full object-cover object-center "
        />
      </motion.div>
      <section className="text-whiteText px-0 md:px-10 overflow-y-auto  ">
        <h4 className="text-3xl font-light">DRIVER</h4>
        <p className="font-bold text-1xl mt-1">Reykjavik Excursions</p>
        <p className="uppercase py-5 text-gray ">Started work 05.2021 - </p>
        <ul className="text-whiteText list-disc space-y-4 ml-5 text-md ">
          <li>Delivering transportation solutions to clients ;-)</li>
        </ul>
      </section>
    </article>
  )
}
import React from 'react'
import { motion } from "framer-motion";
import ExpCard from './ExpCard';
import ExpCardTvn from './ExpCardTvn';
import ExpCardRe from './ExpCardRe';
import ExpCardLotus from './ExpCardLotus';
import ExpCardCurr from './ExpCardCurr';

type Props = {}

export default function WorkExpirience({}: Props) {
  return (
  <article className="h-screen  mx-auto">
    <section>
      <h3 className="flex justify-center items-center uppercase tracking-[15px] text-base md:text-xl text-grey mb-24">
        Experience
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" text-left md:flex-row md:py-3 px-10 items-center">
        <section className="w-full h-full flex space-x-5 overflow-x-scroll p-3 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-siteYellow/50">
          <ExpCard />
          <ExpCardCurr />
          <ExpCardTvn />
          <ExpCardRe />
          <ExpCardLotus />
        </section>
      </motion.div>
    </section> 
  </article>   
  )
}